import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionscompComponent } from './components/submissionscomp/submissionscomp.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsCompComponent } from './components/forms-comp/forms-comp.component';


@NgModule({
  declarations: [ 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
