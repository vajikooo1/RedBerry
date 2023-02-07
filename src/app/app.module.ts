import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'personalInfo',
  component: PersonalinfoComponent,
  pathMatch: "full"


},
{
  path:'**',
  component: HomeComponent,

}]
// {
//   path:'Home',
//   component: HomeComponent
// }
// {
//   path:'Home',
//   component: HomeComponent
// }]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
