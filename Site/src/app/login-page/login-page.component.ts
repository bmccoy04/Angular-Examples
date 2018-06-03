import { Component, OnInit } from '@angular/core';
import { LoginPageModel } from '../login-page-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model: LoginPageModel;
  validationMessage = 'User Name and Password must match!';
  validationMessageVisible = false;

  constructor() {
      this.model = new LoginPageModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.model.UserName === this.model.Password) {
      localStorage.setItem('user_info', JSON.stringify({ Name : this.model.UserName }));
      this.validationMessageVisible = false;
    } else {
      this.validationMessageVisible = true;
    }
  }
}
