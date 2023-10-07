import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Defina as rotas
const routes: Routes = [
  // { path: 'resume', component: ResumeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'certifications', component: CertificationsComponent },
  // { path: 'technologies', component: TechnologiesComponent },
  // { path: 'members', component: MembersComponent },
  // { path: 'achievements', component: AchievementsComponent },
  // Adicione outras rotas conforme necessário
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial se nenhuma rota for correspondida
  { path: '**', redirectTo: '/home' } // Redireciona para a página inicial se uma rota inválida for digitada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
