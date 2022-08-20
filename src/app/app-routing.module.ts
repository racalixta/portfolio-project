import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '', component: HomeComponent },
  {path: 'projects', component: AllProjectsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
