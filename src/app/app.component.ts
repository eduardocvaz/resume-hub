import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-hub';

  @ViewChild(SidenavComponent) sidenav!: SidenavComponent; // Obtenha uma referência ao componente filho
}
