import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchlist, WatchlistActive, WatchlistCreate, WatchlistMedia } from '../model/Watchlist';

const baseUrl = 'http://localhost:8080/api/watchlist';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(
    private http: HttpClient
  ) { }

  getAllWatchlistsByUser(userId: number): Observable<Watchlist[]> {
    return this.http.get<Watchlist[]>(`${baseUrl}?userId=${userId}`)
  }

  getAllWatchlistMediaByWatchlistId(watchlistId: number): Observable<WatchlistMedia[]> {
    return this.http.get<WatchlistMedia[]>(`${baseUrl}/${watchlistId}`);
  }

  createWatchlist(watchlistCreate: WatchlistCreate): Observable<any> {
    return this.http.post(`${baseUrl}/`, watchlistCreate);
  }

  updateWatchlist(watchlistId: number, listMedia: WatchlistMedia[]): Observable<any> {
    return this.http.put(`${baseUrl}/${watchlistId}`, listMedia);
  }

  deleteWatchlist(watchlistId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${watchlistId}`);
  }

  getActiveWatchlist(userId: string): Observable<WatchlistActive> {
    return this.http.get<WatchlistActive>(`${baseUrl}/active?userId=${userId}`);
  }

  updateViewedWatchlistMedia(watchlistId: number, mediaId: number, viewed: boolean): Observable<any> {
    return this.http.post(`${baseUrl}/${watchlistId}/${mediaId}?viewed=${viewed}`, null);
  }

  updateActiveWatchlist(watchlistId: number, active: boolean): Observable<any> {
    return this.http.post(`${baseUrl}/${watchlistId}/active?active=${active}`, null);
  }

  getCountWatchlistMediaActiveNotViewed(watchlistId: number): Observable<any> {
    return this.http.get(`${baseUrl}/${watchlistId}/active/count`);
  }
}
