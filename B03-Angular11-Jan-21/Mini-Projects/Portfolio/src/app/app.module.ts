import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EventSyntaxComponent } from './event-syntax/event-syntax.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterItemComponent } from './footer-item/footer-item.component';
import { SamplesModule } from './samples/samples.module';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ErrorPageComponent,
    EventSyntaxComponent,
    HomePageComponent,
    FooterItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SamplesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
