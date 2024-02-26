import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../components/blog-entry/model/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.apiUrl;
  private authToken = environment.authToken;

  constructor(private http: HttpClient) { }


  getPosts(): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authToken}`,
    });

    return this.http.get<ApiResponse>(`${this.apiUrl}/api/posts?populate=image`, { headers });
  }

}
