import { Component, OnInit } from '@angular/core';
import { ToastNotification } from 'src/app/model/Toast';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit{

  alertaRegistro: ToastNotification = {
    header: 'To-Watch',
    body: 'Se ha realizado correctamente el registro del usuario.'
  }
  
  constructor(public toastService: ToastService) { }

  ngOnInit() {
    this.toastService.setToastValues(this.alertaRegistro.header, this.alertaRegistro.body);
  }

}
