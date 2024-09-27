import {Certification} from "../../../components/certification-entry/model/certification.model";
import {Certificate} from "../../../components/certification-entry/model/certificate.model";
import {Diploma} from "../../../components/certification-entry/model/diploma.model";

export interface Certifications {
  certifications: Certification[];
  certificates: Certificate[];
  diplomas: Diploma[];
}
