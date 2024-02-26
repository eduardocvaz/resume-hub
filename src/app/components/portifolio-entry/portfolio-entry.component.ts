import {Component, Input} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Project} from "./model/project.model";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {TranslateService} from "@ngx-translate/core";
import {ExplorePortfolioComponent} from "../../pages/portfolio/explore-portfolio/explore-portfolio.component";

@Component({
  selector: 'app-portifolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.css'],
  providers: [DialogService]
})
export class PortfolioEntryComponent {
  @Input() project: Project | undefined;
  ref: DynamicDialogRef | undefined;
  baseUrl = environment.baseUrl;

  constructor(
    public dialogService: DialogService,
    private translate: TranslateService,
  ) {}

  openModal(header: string = 'construction.title', project: Project | undefined) {
    this.ref = this.dialogService.open(ExplorePortfolioComponent, {
      header: this.translate.instant(header) || header,
      data: {
        project: project
      },
      width: '97%',
      baseZIndex: 10000,
      maximizable: true
    });
  }
}
