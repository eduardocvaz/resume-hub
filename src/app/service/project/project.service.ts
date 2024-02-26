import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Project} from "../../components/portifolio-entry/model/project.model";
import {concatMap, filter, from, map, Observable, toArray} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.baseUrl;
  stackinfoUrl = environment.stackInfoUrl;

  constructor(private http: HttpClient) {}

  getProjects(language: string) {
    return this.http.get<Project[]>(this.baseUrl + this.getJsonFile(language));
  }

  getProjectsByTags(language: string, tags: string[]): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + this.getJsonFile(language)).pipe(
      map((projects: Project[]) => {
        return projects.filter(project => {
          return project.tags.some(tag => tags.includes(tag));
        });
      })
    );
  }

  getProjectStacksImage(project: Project): Observable<string[]> {
    return from(project.tags).pipe(
      concatMap(tag => fetch(`${this.stackinfoUrl}/stacks?tag=${tag}`)),
      concatMap(response => response.json()),
      filter((stacks: any[]) => stacks && stacks.length > 0),
      map((stacks: any[]) => stacks[0]?.['image-svg']),
      filter(url => !!url),
      toArray()
    );
  }
  private getJsonFile(language: string) {
    return `/assets/data/projects${language === 'pt' ? 'Pt' : 'En'}.json`;
  }

}
