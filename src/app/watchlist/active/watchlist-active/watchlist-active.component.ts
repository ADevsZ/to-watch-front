import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { WatchlistService } from 'src/app/service/watchlist.service';

@Component({
  selector: 'app-watchlist-active',
  templateUrl: './watchlist-active.component.html',
  styleUrls: ['./watchlist-active.component.css']
})
export class WatchlistActiveComponent implements OnInit{
  watchlistActive: any;
  token: any;
  userId: any;

  constructor (
    public userService: UserService,
    public watchlistService: WatchlistService 
  ) {
    this.token = this.userService.getTokenUser();

    this.userService.getUserByToken(this.token).subscribe(response => {
      this.userId = response.userId;
      console.log(this.userId);
      
      this.watchlistService.getActiveWatchlist('' + this.userId).subscribe(response => {
        this.watchlistActive = response;
        console.log(this.watchlistActive);
      });
    });
  }

  ngOnInit() {
    
  }
}
