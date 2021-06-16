import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'child', component: ChildComponent },
  { path: 'skills', component: SkillsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
