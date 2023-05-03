import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getAllFilms() {
    return this.http.get("http://localhost:8080/api/media/films");
  }
}
