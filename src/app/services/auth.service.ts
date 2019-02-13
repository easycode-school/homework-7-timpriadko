import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Check if login & password are in the localstorage
  isAuth() {
    return localStorage.getItem('login') ? true : false;
  }
}
