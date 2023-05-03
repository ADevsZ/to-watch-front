import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { UserRegistration } from '../model/User';
import { Router } from '@angular/router';
declare function toastCall(): void;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: UserRegistration = {
    firstName: '',
    lastName: '',
    loginName: '',
    password: '',
    email: ''
  }

  toastVar: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  registration(form: NgForm) {
    this.userService.userRegistration(this.user).subscribe(response => {
      // toastCall();
      this.router.navigate(['login']);
    })
  }
}
