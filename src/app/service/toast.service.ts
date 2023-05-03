import { Injectable } from '@angular/core';
import { ToastNotification } from '../model/Toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: ToastNotification = {
    header: '',
    body: ''
  }

  setToastValues(header: string, body: string) {
    this.toasts.body = body;
    this.toasts.header = header;
  }

}
