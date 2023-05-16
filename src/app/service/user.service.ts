import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(user: User): Observable<any> {
    return this.http.post("http://localhost:8080/token", user, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken?.replace('Bearer ', '');

      localStorage.setItem('token', token);

      return body;
    }));
  }

  getTokenUser(): any {
    return localStorage.getItem('token');
  }

  getNickName(): Observable<any> {
    let token = localStorage.getItem("token");
    return this.http.get(`http://localhost:8080/api/user/nick?token=${token}`);
  }
}
