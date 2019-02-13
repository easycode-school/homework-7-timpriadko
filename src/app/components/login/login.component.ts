import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm;
  public user = {
    login: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isAuth()) {
      this.router.navigate(['/users']);
    }
  }
  // Login submit handler
  loginSubmit() {
    localStorage.setItem('login', this.user.login);
    localStorage.setItem('password', this.user.password);
    console.log(this.auth.isAuth());
    // Disdply/hide Logout button
    const logOutBtn = document.getElementById('logout');
    logOutBtn.style.display = this.auth.isAuth() ? '' : 'none';
  }

}
