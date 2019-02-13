import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService
    ) { }

  ngOnInit() {
    // Disdply/hide Logout button
    const logOutBtn = document.getElementById('logout');
    logOutBtn.style.display = this.auth.isAuth() ? '' : 'none';
  }

  // Logout button handler
  logOutHandler() {
    // Delete user data from localstorage
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    // Disdply/hide Logout button
    const logOutBtn = document.getElementById('logout');
    logOutBtn.style.display = this.auth.isAuth() ? '' : 'none';
  }
}
