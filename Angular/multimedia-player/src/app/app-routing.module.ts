import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChattingPageComponent } from './chatting-page/chatting-page.component';
import { GrowthComponent } from './growth/growth.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'chat', component: ChattingPageComponent},
  {path:'growth', component: GrowthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
