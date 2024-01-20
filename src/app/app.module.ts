import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { EducationalbackgroundComponent } from './educationalbackground/educationalbackground.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalinfoComponent,
    ContactinfoComponent,
    EducationalbackgroundComponent,
    WorkexperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
