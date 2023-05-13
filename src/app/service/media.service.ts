import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../model/Media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getAllFilms() {
    return this.http.get("http://localhost:8080/api/media/films");
  }

  getAllSeries() {
    return this.http.get("http://localhost:8080/api/media/series");
  }

  getMediaById(id: number) {
    return this.http.get(`http://localhost:8080/api/media/${id}`);
  }
}
