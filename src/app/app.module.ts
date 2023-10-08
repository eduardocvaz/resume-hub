import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from "primeng/sidebar";
import {MenuModule} from "primeng/menu";
import {DividerModule} from "primeng/divider";
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from "primeng/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SplitterModule} from "primeng/splitter";
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslationService} from "./translation.service";
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, environment.i18nPath, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopmenuComponent,
    HomeComponent,
    TechnologiesComponent,
    ServicesComponent,
    CertificationsComponent,
    PortfolioComponent,
    BlogComponent,
    TestimonialsComponent,
    AchievementsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    MenuModule,
    DividerModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
    SplitterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translationService: TranslationService) {
    this.translationService.initializeApp();
  }
}
