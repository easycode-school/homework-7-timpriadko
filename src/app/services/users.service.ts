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

  getUsers(): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(`${this.apiUrl}/users`);
  }

  getUser(id: string): Observable<Object> {
    return this.http.get<Object>(`${this.apiUrl}/users/${id}`);
  }
}
