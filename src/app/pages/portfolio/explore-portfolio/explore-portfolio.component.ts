import {Component} from '@angular/core';
import {Project} from "../../../components/portifolio-entry/model/project.model";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {ProjectService} from "../../../service/project/project.service";

@Component({
  selector: 'app-explore-portfolio',
  templateUrl: './explore-portfolio.component.html',
  styleUrls: ['./explore-portfolio.component.css']
})
export class ExplorePortfolioComponent {
  project: Project = this.ref.data.project;
  stacksImage: string[] = [];
  constructor(
    public ref: DynamicDialogConfig,
    private projectService: ProjectService,
  ) {
    this.getProjectStacksImage();
  }
  getProjectStacksImage() {
    this.projectService.getProjectStacksImage(this.project).subscribe((stacks: string[]) => {
      this.stacksImage = stacks;
    });
  }



}
