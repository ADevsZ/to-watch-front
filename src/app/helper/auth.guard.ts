import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, of } from 'rxjs';
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

      if (this.userService.getTokenUser() && this.authService.isLoggedIn) {
        return true;
      }
      this.router.navigate(['login']);
      return false;

      // return this.authService.getTokenUser().pipe(
      //   map(() => true),
      //   catchError(() => {
      //     this.router.navigate(['login']);
      //     return of(false);
      //   })
      // );
  };

  canActivateChild: CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => this.canActivate(route, state);
  
}
