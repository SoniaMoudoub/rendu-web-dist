import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent,
    routingComponents
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   /* RouterModule.forRoot([
      { path: '', component: CustomerComponent },
      { path: 'book', component: BookListComponent },
    
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
