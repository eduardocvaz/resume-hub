import { Component } from '@angular/core';
import {Qualification} from "../../components/qualification-entry/model/qualification.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../language.service";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  qualifications: Qualification[] = [];
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
  }

  async checkLanguage(language: string) {
    // Determine o arquivo JSON com base no idioma atual
    const jsonFile = `/assets/data/careers${language === 'pt' ? 'Pt' : 'En'}.json`;

    await this.http.get<Qualification[]>(this.baseUrl + jsonFile).subscribe((data) => {
      this.qualifications = data;
    });
  }

}
