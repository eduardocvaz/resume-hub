import {Certification} from "../../utils/certification-entry/model/certification.model";
import {Certificate} from "../../utils/certification-entry/model/certificate.model";

export interface Certifications {
  certifications: Certification[];
  certificates: Certificate[];
}
