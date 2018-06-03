import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user-info',
  templateUrl: './display-user-info.component.html',
  styleUrls: ['./display-user-info.component.css']
})
export class DisplayUserInfoComponent implements OnInit {

  username: string;

  constructor() {
    const userInfo  = JSON.parse(localStorage.getItem('user_info'));
    console.log(userInfo);
    if (userInfo !== null) {
      this.username = userInfo.Name;
    }
  }

  ngOnInit() {
  }
}
