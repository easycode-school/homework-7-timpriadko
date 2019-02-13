import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${this.apiUrl}/users`);
  }

  getUser(id: string): Observable<object> {
    return this.http.get<object>(`${this.apiUrl}/users/${id}`);
  }
}
