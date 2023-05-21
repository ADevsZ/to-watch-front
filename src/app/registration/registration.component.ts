import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form!: FormGroup;
  toastVar: any;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.crearForm();
  }

  registration() {
  }

  crearForm() {
    this.form = this.fb.group({
      first_name: [''],
      last_name: [''],
      login_name: [''],
      email: [''],
      password: [''],
      repeat_password: ['']
    });
  }

  volver() {
    this.router.navigate(['login']);
  }
}
