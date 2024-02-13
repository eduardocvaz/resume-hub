import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ServicesComponent } from './pages/services/services.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import {EducationComponent} from "./pages/education/education.component";
import {CareerComponent} from "./pages/career/career.component";
import {PodcastComponent} from "./pages/podcast/podcast.component";

// Defina as rotas
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial se nenhuma rota for correspondida
  { path: 'home', component: HomeComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'career', component: CareerComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: '**', redirectTo: '/home' } // Redireciona para a página inicial se uma rota inválida for digitada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
