import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ExploreComponent} from "./explore/explore.component";
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

  show(header: string = 'construction.title', tags: string[] = []) {
    this.ref = this.dialogService.open(ExploreComponent, {
      header: this.translate.instant(header),
      width: '70%',
      data: {
        tags: tags
      },
      baseZIndex: 10000,
      maximizable: true
    });
  }
}
