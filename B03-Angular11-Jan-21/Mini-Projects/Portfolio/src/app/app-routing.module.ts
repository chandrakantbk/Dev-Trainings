import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EventSyntaxComponent } from './event-syntax/event-syntax.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ParentToChildCommunicationComponent } from './samples/parent-to-child-communication/parent-to-child-communication.component';
import { SamplesModule } from './samples/samples.module';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'educations', component: EducationComponent },
  { path: 'events', component: EventSyntaxComponent },
  // { path: 'samples', component: ParentToChildCommunicationComponent },


  { path: 'samples', loadChildren: () => import('./samples/samples.module').then((m) => { m.SamplesModule }) },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }