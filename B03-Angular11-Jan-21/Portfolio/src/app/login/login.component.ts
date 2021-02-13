import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-form">
      <input type="text" placeholder="Username">
      <input type="password">
      <button>LOGIN</button>
  </div>`,

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
