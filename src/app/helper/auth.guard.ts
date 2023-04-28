import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  authService: any;
  router: any;

  constructor() {
    this.authService = inject(UserService);
    this.router = inject(Router);
  }


  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {

      if (this.authService.getTokenUser()) {
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
