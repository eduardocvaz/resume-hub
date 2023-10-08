import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AchievementsComponent } from './achievements/achievements.component';

// Defina as rotas
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial se nenhuma rota for correspondida
  { path: 'home', component: HomeComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: '**', redirectTo: '/home' } // Redireciona para a página inicial se uma rota inválida for digitada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
