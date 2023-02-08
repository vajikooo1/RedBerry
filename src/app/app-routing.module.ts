import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'personalInfo',
    component: PersonalinfoComponent,
    pathMatch: "full"
  
  
  },
  {
    path:'experience',
    component: ExperienceComponent,
    
  },

  {
    path: 'personalInfo',
    component: PersonalinfoComponent,
    pathMatch: "full"
  },

  {
    path:'**',
    component: HomeComponent,
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
