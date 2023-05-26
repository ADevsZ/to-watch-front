import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { UserService } from '../service/user.service';
import { LoaderService } from '../service/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.getTokenUser();

    this.loaderService.callLoader();

    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `${token}`)
      })
      return next.handle(cloned).pipe(
        finalize( () => this.loaderService.closeLoader())
      );
    }
    return next.handle(request).pipe(
      finalize( () => this.loaderService.closeLoader())
    );
  }
}
