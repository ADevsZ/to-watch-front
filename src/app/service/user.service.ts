import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User, UserRegistration, UserUpdate } from '../model/User';

const baseUrl = 'http://localhost:8080/api/user';
const baseUrlToken = 'http://localhost:8080/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(user: User): Observable<any> {
    return this.http.post(`${baseUrlToken}`, user, {
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

  getUserByToken(token: any): Observable<any> {
    return this.http.get(`${baseUrl}?token=${token}`);
  }

  userRegistration(user: UserRegistration): Observable<any> {
    return this.http.post(`${baseUrl}/register`, user);
  }

  getNickName(): Observable<any> {
    let token = localStorage.getItem("token");
    return this.http.get(`${baseUrl}/nick?token=${token}`);
  }

  getAllUserLogs(userId: any): Observable<any> {
    return this.http.get(`${baseUrl}/${userId}/logs`);
  }

  updateUserProfile(userId: number, token: string, userUpdate: UserUpdate): Observable<any> {
    return this.http.put(`${baseUrl}/${userId}?token=${token}`, userUpdate);
  }
}
