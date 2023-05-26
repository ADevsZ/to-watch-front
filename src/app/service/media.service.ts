import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media, MediaPremiere, StreamingPlatformMedia } from '../model/Media';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<Media[]> {
    return this.http.get<Media[]>(`${baseUrl}/films`);
  }

  getAllSeries(): Observable<Media[]> {
    return this.http.get<Media[]>(`${baseUrl}/series`);
  }

  getMediaById(id: number): Observable<Media> {
    return this.http.get<Media>(`${baseUrl}/${id}`);
  }

  getAllPlatformsByMedia(mediaId: number): Observable<StreamingPlatformMedia[]> {
    return this.http.get<StreamingPlatformMedia[]>(`${baseUrl}/${mediaId}/platforms`);
  }

  getAllMediaPremieres(): Observable<MediaPremiere[]> {
    return this.http.get<MediaPremiere[]>(`${baseUrl}/premieres`);
  }

  getAverageRatingMedia(mediaId: number): Observable<number> {
    return this.http.get<number>(`${baseUrl}/rating/${mediaId}`);
  }

  createRatingMedia(mediaId: number, rating: number, token: string): Observable<any> {
    return this.http.post(`${baseUrl}/rating/${mediaId}?rating=${rating}&token=${token}`, null);
  }

  getRatingMediaByUser(mediaId: number, userId: number): Observable<any> {
    return this.http.get(`${baseUrl}/rating/${mediaId}/rate?userId=${userId}`);
  }

}
