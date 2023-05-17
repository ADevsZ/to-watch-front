import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }

  public loadScript(id:string , url:string) {
    return new Promise((resolve, reject) => {
      if (id && document.getElementById(id)) {
        resolve({id: id, loaded: true, status: 'Empezando carga de script'});
      }

      let body = document.body;
      let script = document.createElement('script');

      script.type = 'text/javascript';
      script.innerHTML = '';
      script.src = url;
      script.id = id;

      script.onload = () => {
        resolve({id: id, loaded: true, status: 'Script cargado'});
      };

      script.onerror = (error: any) => resolve({id: id, loaded: false, status: 'Script cargado'});
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }

  public removeScript(id: string) {
    let script = document.getElementById(id);
    if (script) {
      script.remove();
    }
  }
}
