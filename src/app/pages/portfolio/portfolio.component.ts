import { Component } from '@angular/core';
import {Project} from "../../components/portifolio-entry/model/project.model";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../language.service";
import {ProjectService} from "../../service/project/project.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = [];

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private projectService: ProjectService
  ) {
    this.languageService.getLanguageChange().subscribe( (language) => this.checkLanguage(language));
  }

  ngOnInit() {
    this.checkLanguage(this.translate.currentLang);
    console.log(this.projects);
  }

  async checkLanguage(language: string) {
    this.projectService.getProjects(language).subscribe((projects) => {
      this.projects = projects;
    });
  }

}
