import {Component, OnInit} from '@angular/core';
import {Qualification} from "../utils/qualification-entry/model/qualification.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  qualifications: Qualification[] = [];
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Qualification[]>(this.baseUrl + '/assets/data/educationsPt.json').subscribe((data) => {
      this.qualifications = data;
    });
  }


}
