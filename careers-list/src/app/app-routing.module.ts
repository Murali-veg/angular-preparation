import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { LocateComponent } from './locate/locate.component';
import { CareerPageComponent } from './career-page/career-page.component';

const routes: Routes = [
 
  {path:'about',   component:AboutComponent},
  {path:'homepage',   component:HomepageComponent},
  {path:'contact', component:ContactComponent},
  {path:'Locate',component:LocateComponent},
  {path:'CareerPage',component:CareerPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AboutComponent,HomepageComponent,ContactComponent,LocateComponent,CareerPageComponent]
