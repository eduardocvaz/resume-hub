import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ProjectLink {
  name: string;
  url: string;
  iconSvg: string;
}

export interface Project {
  title: string;
  icons: IconProp[];
  description: string[];
  fullDescription: string[];
  imageUrl: string;
  tags: string[];
  links: ProjectLink[];
}
