import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { WatchlistService } from 'src/app/service/watchlist.service';

@Component({
  selector: 'app-watchlist-edit',
  templateUrl: './watchlist-edit.component.html',
  styleUrls: ['./watchlist-edit.component.css']
})
export class WatchlistEditComponent implements OnInit{
  public watchlistPage!: number;
  watchlistId?: any;
  watchlistMedia?: any;
  token: any;
  user: any;
  activeWatchlistId: any;
  isActive = false;

  constructor(
    private watchlistService: WatchlistService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
    ) {
      this.activatedRoute.params.subscribe((params) => {
        this.watchlistId = params['id'];

        this.token = this.userService.getTokenUser();

        this.userService.getUserByToken(this.token).subscribe((response) => {
          this.user = response;
          this.watchlistService.getActiveWatchlist(this.user.userId).subscribe((response) => {
            this.activeWatchlistId = response.watchlistId;

            if (this.activeWatchlistId == this.watchlistId) {
              this.isActive = true;
            }
          });
        });

        this.watchlistService.getAllWatchlistMediaByWatchlistId(this.watchlistId).subscribe((response) => {
          this.watchlistMedia = response;
        });
      });
    }

  ngOnInit() {}

  deleteWatchlist() {
    this.watchlistService.deleteWatchlist(this.watchlistId).subscribe(() => {
      this.router.navigate(['/watchlists']);
      this.showDeleteWatchlistSuccess()
    });
  }
  
  desactivatedWatchlist() {
    this.watchlistService.updateActiveWatchlist(this.watchlistId, false).subscribe(() => {
      location.reload();
      this.showDesactivatedWatchlistSuccess();
    });
  }

  activateWatchlist() {
    this.watchlistService.updateActiveWatchlist(this.watchlistId, true).subscribe(() => {
      location.reload();
      this.showActivatedWatchlistSuccess();
    });
  }

  showDeleteWatchlistSuccess() {
    this.toastr.success('Watchlist eliminada correctamente.', 'Watchlist eliminada');
  }

  showDesactivatedWatchlistSuccess() {
    this.toastr.success('Watchlist desactivada correctamente.', 'Watchlist desactivada');
  }

  showActivatedWatchlistSuccess() {
    this.toastr.success('Watchlist activada correctamente.', 'Watchlist activada');
  }

}
