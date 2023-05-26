import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { WatchlistService } from 'src/app/service/watchlist.service';

export class NgbdModalContent {
  constructor (public activeModal: NgbdModalContent) {}
}

@Component({
  selector: 'app-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.css']
})
export class WatchlistListComponent implements OnInit{
  watchlists?: any;
  token?: string;
  userId?: number;
  public pageWatchlist!: number;
  noHaveWatchlist = true;

  constructor(
    private userService: UserService,
    private watchlistService: WatchlistService
    ) {

      this.token = this.userService.getTokenUser();
      this.userService.getUserByToken(this.token).subscribe((response) => {
        const user = response;

        this.watchlistService.getAllWatchlistsByUser(user.userId).subscribe((response) => {
          this.watchlists = response;
          if (this.watchlists.length == 0) {
            this.noHaveWatchlist = false;
          }
        });
      });
    
  }

  ngOnInit() { }

}
