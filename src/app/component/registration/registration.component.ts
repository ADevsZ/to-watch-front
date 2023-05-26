import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../service/user.service';
import { UserRegistration } from '../../model/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    this.crearForm();
  }

  registration() {
    if (this.form.invalid) {
      this.showErrorInvalidForm();
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      });
    } else {
      let user: UserRegistration = {
        firstName: String = this.form.get('first_name')?.value,
        lastName: String = this.form.get('last_name')?.value,
        loginName: String = this.form.get('login_name')?.value,
        password: String = this.form.get('password')?.value,
        email: String = this.form.get('email')?.value
      }
      this.userService.userRegistration(user).subscribe(() => {
        this.router.navigate(['login']);
        this.showSuccess();
      });
    }
  }
  
  showSuccess() {
    this.toastr.success('Usuario registrado correctamente.', 'Usuario registrado');
  }

  showErrorInvalidForm() {
    this.toastr.error('Hay campos del formulario que contienen valores vacíos o no válidos.', 'Error en Formulario de Registro');
  }

  clearValues() {
    this.form.reset()
  }

  crearForm() {
    this.form = this.fb.group ({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      login_name: ['', [Validators.required, Validators.pattern('@[a-zA-Z0-9._%+-]{5,30}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  get firstNameValid() {
    return this.form.get('first_name')?.invalid && this.form.get('first_name')?.touched;
  }

  get lastNameValid() {
    return this.form.get('last_name')?.invalid && this.form.get('last_name')?.touched;
  }

  get loginNameValid() {
    return this.form.get('login_name')?.invalid && this.form.get('login_name')?.touched;
  }

  get emailValid() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get passwordValid() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }

  volver() {
    this.router.navigate(['login']);
  }
}
