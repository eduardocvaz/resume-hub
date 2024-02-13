import {Component, Input} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Certification} from "./model/certification.model";

@Component({
  selector: 'app-certification-entry',
  templateUrl: './certification-entry.component.html',
  styleUrls: ['./certification-entry.component.css']
})
export class CertificationEntryComponent {
  imagensCarregadas: boolean = false;
  baseUrl = environment.baseUrl;
  @Input() certification: Certification | undefined;

  // certification = {
  //   name: 'Certificação Angular',
  //   location: 'Online Course',
  //   summary: 'Esta é uma certificação Angular básica.',
  //   pdfUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=956380',
  //   imageUrl: '/assets/certifications/ScrumFundamentalsCertified.png',
  //   description: [
  //     'Esta certificação é uma certificação básica de Angular.',
  //     'Ela é uma certificação de nível básico.'
  //   ]
  // };

  imagemCarregada() {
    this.imagensCarregadas = true;
  }
}
