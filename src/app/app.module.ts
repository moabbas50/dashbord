import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LodingComponent } from './components/loding/loding.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LodingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
