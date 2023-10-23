import {Component, Type} from '@angular/core';
import {environment} from "../../environments/environment";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ExploreComponent} from "./explore/explore.component";
import {ConstructionPageComponent} from "../utils/construction-page/construction-page.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  providers: [DialogService]
})
export class TechnologiesComponent {
  baseUrl = environment.baseUrl;
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private translate: TranslateService
  ) {}

  show(header: string = 'construction.title') {
    this.ref = this.dialogService.open(ConstructionPageComponent, {
      header: this.translate.instant(header),
      width: '80%',
      // contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }

}
