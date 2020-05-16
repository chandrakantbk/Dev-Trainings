import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'', component: HomepageComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'chat', component: LiveChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
