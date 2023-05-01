import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  userService: any;
  router: any;
  authService: any;

  constructor() {
    this.userService = inject(UserService);
    this.router = inject(Router);
    this.authService = inject(AuthService);
  }

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {

      if (this.userService.getTokenUser()) {
        this.authService.login();
        return true;
      }

      this.router.navigate(['login']);
      this.authService.logout();
      return false;
  };

  canActivateChild: CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => this.canActivate(route, state);
  
}
