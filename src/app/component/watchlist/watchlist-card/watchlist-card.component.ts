import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watchlist-card',
  templateUrl: './watchlist-card.component.html',
  styleUrls: ['./watchlist-card.component.css']
})
export class WatchlistCardComponent {
  @Input() watchlist: any;
}
