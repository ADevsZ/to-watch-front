import { Component } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  myForm: FormGroup;
  
  constructor(
    private userService: UserService,
    private router: Router,
    public fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(form: NgForm) {
    console.log('form value', form.value);

    this.userService.loginUser(this.user).subscribe(() => {
      this.router.navigate(['/']);
    }, () => {
      this.errorLoginToast();
    });
  }

  register() {
    this.router.navigateByUrl('/registration');
  }

  errorLoginToast() {
    this.toastr.error('Los datos introducidos son incorrectos.' , `Error en Inicio de Sesión`);
  }

}
