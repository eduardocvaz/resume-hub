import { Component } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  baseUrl = environment.baseUrl;

}
