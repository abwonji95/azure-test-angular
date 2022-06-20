import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AngularMaterialModule } from './pages/modules/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    NavBarComponent
  ],


imports: [
  BrowserModule,
  AppRoutingModule,
  AngularMaterialModule,
  FormsModule,
  ReactiveFormsModule,
  MatNativeDateModule,
  HttpClientModule,
  BrowserAnimationsModule
],
providers: [
  DatePipe
],
bootstrap: [AppComponent]
})
export class AppModule { }
