import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
