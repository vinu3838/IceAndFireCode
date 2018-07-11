import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewInfoComponent } from './view-info/view-info.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoDetailsService } from './info-details.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe} from './pipe_search';
import { FormsModule }   from '@angular/forms';
import { CompNotFoundComponent } from './comp-not-found/comp-not-found.component';
@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    ViewInfoComponent,
    ViewComponent,
    CompNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    FormsModule,
    BrowserModule, 
    RouterModule.forRoot([

  
    {path:'',component:ViewComponent},
    {path:'Information/:url',component:ViewInfoComponent},
    {path:'**',component:ViewComponent},
    {path:'NotFound',component:ViewComponent}
   
    ])
  ],
  providers: [InfoDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
