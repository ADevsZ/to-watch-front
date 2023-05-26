import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loaderService: NgxSpinnerService) { }

  public callLoader() {
    this.loaderService.show();
  }

  public closeLoader() {
    setTimeout(() => {
      this.loaderService.hide();
    }, 500);
    
  }
}
