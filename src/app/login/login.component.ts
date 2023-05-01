import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    email: '',
    password: ''
  };
  
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  login(form: NgForm) {
    console.log('form value', form.value);

    this.userService.loginUser(this.user).subscribe(response => {
      this.authService.login();
      this.router.navigate(['/']);
    });
  }

}
