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
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { TopmenuComponent } from './nav/topmenu/topmenu.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslationService} from "./translation.service";
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ServicesComponent } from './pages/services/services.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FieldsetModule} from "primeng/fieldset";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import { ExploreComponent } from './pages/technologies/explore/explore.component';
import { ConstructionPageComponent } from './components/construction-page/construction-page.component';
import { EducationComponent } from './pages/education/education.component';
import { CareerComponent } from './pages/career/career.component';
import { QualificationEntryComponent } from './components/qualification-entry/qualification-entry.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { LanguageService } from './language.service';
import { CertificationEntryComponent } from './components/certification-entry/certification-entry.component';
import { PortfolioEntryComponent } from './components/portifolio-entry/portfolio-entry.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBootstrap, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { ExplorePortfolioComponent } from './pages/portfolio/explore-portfolio/explore-portfolio.component';

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
    AchievementsComponent,
    AboutComponent,
    ContactComponent,
    ExploreComponent,
    ConstructionPageComponent,
    EducationComponent,
    CareerComponent,
    QualificationEntryComponent,
    CertificationEntryComponent,
    PortfolioEntryComponent,
    BlogEntryComponent,
    PodcastComponent,
    ExplorePortfolioComponent,
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
    }),
    FieldsetModule,
    ScrollPanelModule,
    CardModule,
    PanelModule,
    CommonModule,
    FontAwesomeModule,
    NgOptimizedImage
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private translationService: TranslationService,
    private library: FaIconLibrary
  ) {
    this.translationService.initializeApp();
    library.addIcons(faBootstrap);
    library.addIcons(faAngular);
    library.addIcons(faMicrophoneLines);
  }
}
