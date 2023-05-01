import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  login(user: User) {
    debugger;
    // this.userService.loginUser(user);
    this.loggedIn.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
