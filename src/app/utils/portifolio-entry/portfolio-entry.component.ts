import {Component, Input} from '@angular/core';
import {environment} from "../../../environments/environment";
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import {Project} from "./model/project.model";
import {ConstructionPageComponent} from "../construction-page/construction-page.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {Qualification} from "../qualification-entry/model/qualification.model";

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

  openModal(header: string = 'construction.title') {
    this.ref = this.dialogService.open(ConstructionPageComponent, {
      header: this.translate.instant(header) || header,
      width: '80%',
      // contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }
}
