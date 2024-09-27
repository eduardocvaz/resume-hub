import { Component } from '@angular/core';
import {Certification} from "../../components/certification-entry/model/certification.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../language.service";
import {Certifications} from "./model/certifications.model";
import {Certificate} from "../../components/certification-entry/model/certificate.model";
import {Diploma} from "../../components/certification-entry/model/diploma.model";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certification: Certification[] = [];
  certificate: Certificate[] = [];
  diploma: Diploma[] = [];
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
    const jsonFile = `/assets/data/certifications${language === 'pt' ? 'Pt' : 'En'}.json`;

    await this.http.get<Certifications>(this.baseUrl + jsonFile).subscribe((data) => {
      this.certification = data.certifications;
      this.certificate = data.certificates;
      this.diploma = data.diplomas;
    });
  }
}
