import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../model/Media';

const baseUrl = 'http://localhost:8080/api/media';

@Injectable({
  providedIn: 'root'
})
export class MediaSearchService {

  constructor(private http: HttpClient) { }

  searchFilms(text: string): Observable<Media[]> {
    return this.http.get<Media[]>(`${baseUrl}/filmfiltered?text=${text}`);
  }
}
