import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserUpdate } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrls: ['./user-configuration.component.css']
})
export class UserConfigurationComponent {
  token: any;
  user: any;
  form!: FormGroup;
  toastVar: any;

  constructor (
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService
    ) {
    this.token = this.userService.getTokenUser(); 

    this.userService.getUserByToken(this.token).subscribe((response) => {
      this.user = response;
    });

    this.crearForm();
  }

  crearForm() {
    this.form = this.fb.group ({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  showSuccess() {
    this.toastr.success('Se han actualizado los datos del usuario correctamente.', 'Usuario actualizado');
  }

  showErrorInvalidForm() {
    this.toastr.error('Hay campos del formulario que contienen valores vacíos o no válidos.', 'Error en Formulario de Actualización');
  }

  get firstNameValid() {
    return this.form.get('first_name')?.invalid && this.form.get('first_name')?.touched;
  }

  get lastNameValid() {
    return this.form.get('last_name')?.invalid && this.form.get('last_name')?.touched;
  }

  get passwordValid() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }

  updateUser() {
    if (this.form.invalid) {
      this.showErrorInvalidForm();
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      });
    } else {
      let user: UserUpdate = {
        userId: Number = this.user.id,
        firstName: String = this.form.get('first_name')?.value,
        lastName: String = this.form.get('last_name')?.value,
        password: String = this.form.get('password')?.value,
      }

      this.userService.updateUserProfile(this.user.userId, this.token, user).subscribe(() => {
        this.showSuccess();
        location.reload();
      });
    }
  }

}
