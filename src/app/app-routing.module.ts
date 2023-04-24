import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './shared/content/content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SubmissionscompComponent } from './components/submissionscomp/submissionscomp.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';
import { FormsCompComponent } from './components/forms-comp/forms-comp.component';


const routes: Routes = [
  {path : '', component : SubmissionscompComponent},
  {path : 'submissions', component : SubmissionscompComponent},
  {path : 'history', component :  FormsCompComponent},
  {path : 'forms', component :  FormsCompComponent},
  {path : 'customers', component :  FormsCompComponent},
  {path : 'workflow', component :  FormsCompComponent},
  {path : 'reports', component :  FormsCompComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SubmissionscompComponent,
    FormsCompComponent,
    FooterComponent,
    MapComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
