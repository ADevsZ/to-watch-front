import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { WatchlistService } from 'src/app/service/watchlist.service';

@Component({
  selector: 'app-watchlist-active',
  templateUrl: './watchlist-active.component.html',
  styleUrls: ['./watchlist-active.component.css']
})
export class WatchlistActiveComponent implements OnInit{
  watchlistActive: any;
  mediaList: any;
  watchlistActiveTitle?: string;
  token: any;
  userId: any;
  haveActiveWatchlist?: boolean;
  public watchlistActivePage!: number;

  constructor (
    public userService: UserService,
    public watchlistService: WatchlistService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.token = this.userService.getTokenUser();

    this.userService.getUserByToken(this.token).subscribe(response => {
      this.userId = response.userId;
      
      this.watchlistService.getActiveWatchlist('' + this.userId).subscribe(response => {
        this.watchlistActive = response;

        if (this.watchlistActive != null) {
          this.watchlistActiveTitle = this.watchlistActive.watchlistName;
          this.mediaList = this.watchlistActive.mediaList;
          this.haveActiveWatchlist = true;
          
        } else {
          this.haveActiveWatchlist = false;
        }

      });
    });
  }

  updateViewedMedia(mediaId: number, viewed: boolean, type: string, mediaTitle: string) {
    var countMediaActiveNotViewed;
    this.watchlistService.updateViewedWatchlistMedia(this.watchlistActive.watchlistId, mediaId, viewed).subscribe((response) => {

      this.updateViewedMediaSuccess(type, mediaTitle);
      setTimeout(() => {
        location.reload();
      }, 1000);

      this.watchlistService.getCountWatchlistMediaActiveNotViewed(this.watchlistActive.watchlistId).subscribe((response) => {
        countMediaActiveNotViewed = response;

        if (countMediaActiveNotViewed == 0) {
          this.watchlistService.updateActiveWatchlist(this.watchlistActive.watchlistId, false).subscribe((response) => {
            this.watchlistActiveCompleted();
          });
        }
      });
    });
  }

  updateViewedMediaSuccess(type: string, mediaTitle: string) {
    var tipo = type === 'Film' ? 'Película' : 'Serie';
    var watchlistActiveName = this.watchlistActive.watchlistName;
    this.toastr.success(`Ha terminado la ${tipo}: ${mediaTitle}.` , `Watchlist ${watchlistActiveName} - ${tipo} vista`);
  }

  watchlistActiveCompleted() {
    var watchlistActiveName = this.watchlistActive.watchlistName;
    this.toastr.success(`Ha completado la Watchlist: ${watchlistActiveName}.` , `Watchlist Completada`);
  }
}
