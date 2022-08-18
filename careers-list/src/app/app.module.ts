import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CareerPageComponent } from './career-page/career-page.component';
// import { LocateComponent } from './locate/locate.component';
// import { ContactComponent } from './contact/contact.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { AboutComponent } from './about/about.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
