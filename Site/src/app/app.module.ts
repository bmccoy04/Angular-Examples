import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { SharedComponent } from './shared/shared.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonFormReactiveComponent } from './person-form-reactive/person-form-reactive.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DisplayUserInfoComponent } from './display-user-info/display-user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    SharedComponent,
    PersonFormComponent,
    PersonFormReactiveComponent,
    LoginPageComponent,
    DisplayUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
