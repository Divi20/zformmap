import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './shared/content/content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SubmissionscompComponent } from './components/submissionscomp/submissionscomp.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  {path : '', component : SubmissionscompComponent},
  {path : 'submissions', component : SubmissionscompComponent},
  {path : 'submissions', component : SubmissionscompComponent},
  {path : 'submissions', component : SubmissionscompComponent},
  {path : 'submissions', component : SubmissionscompComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SubmissionscompComponent,
    FooterComponent,
    MapComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
