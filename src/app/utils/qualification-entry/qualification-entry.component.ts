import {Component, Input} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Qualification} from "./model/qualification.model";

@Component({
  selector: 'app-qualification-entry',
  templateUrl: './qualification-entry.component.html',
  styleUrls: ['./qualification-entry.component.css']

})
export class QualificationEntryComponent {
  @Input() qualification: Qualification | undefined;
  baseUrl = environment.baseUrl;

  showSummary = true;

  toggleFullView() {
    this.showSummary = !this.showSummary;
  }

}
