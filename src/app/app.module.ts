import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent,DialogLogin } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SchoolComponent } from './pages/school/school.component';
import { SchoolsComponent } from './pages/schools/schools.component';

import { LivesearchService } from './services/livesearch.service';

import { SchooDetailsService } from './services/school-details.service';

import { SearchboxComponent } from './pages/searchbox/searchbox.component';
import { MaterialModule } from './app.material';
 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SchoolComponent,
    SchoolsComponent,
    SearchboxComponent,
    DialogLogin
    
     
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCN7W69CkV4w2QMsRnquW5pOXo_3JKWfU',
      libraries: ["places"]
    })
  ],
  entryComponents: [
    DialogLogin
],
  providers: [LivesearchService,SchooDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
