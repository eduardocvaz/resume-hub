import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../../language.service";
import {ProjectService} from "../../../service/project/project.service";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {Project} from "../../../components/portifolio-entry/model/project.model";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  tags: string[] = this.ref.data.tags;
  projects: Project[] = [];


  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private projectService: ProjectService,
    public ref: DynamicDialogConfig
  ) {
    this.languageService.getLanguageChange().subscribe( (language) => this.checkLanguage(language));
  }

  ngOnInit() {
    this.checkLanguage(this.translate.currentLang);
  }

  async checkLanguage(language: string) {
    console.log(this.tags);
    this.projectService.getProjectsByTags(language, this.tags).subscribe((projects) => {
      this.projects = projects;
    });
    console.log(this.projects);
  }


}
