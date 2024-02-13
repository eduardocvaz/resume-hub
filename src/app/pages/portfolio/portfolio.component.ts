import { Component } from '@angular/core';
import {Qualification} from "../../components/qualification-entry/model/qualification.model";
import {Project} from "../../components/portifolio-entry/model/project.model";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../language.service";
import {Certifications} from "../certifications/model/certifications.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = [];
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.languageService.getLanguageChange().subscribe( (language) => this.checkLanguage(language));
  }

  ngOnInit() {
    this.checkLanguage(this.translate.currentLang);
    console.log(this.projects);
  }

  async checkLanguage(language: string) {
    // Determine o arquivo JSON com base no idioma atual
    const jsonFile = `/assets/data/projects${language === 'pt' ? 'Pt' : 'En'}.json`;

    await this.http.get<Project[]>(this.baseUrl + jsonFile).subscribe((data) => {
      this.projects = data;
    });

  }

}
