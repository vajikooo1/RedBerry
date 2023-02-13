import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { FinalComponent } from './final/final.component';
import { AdditionalComponent } from './additional/additional.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalinfoComponent,
    ExperienceComponent,
    EducationComponent,
    FinalComponent,
    AdditionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
