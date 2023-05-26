import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/service/media.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rating-media',
  templateUrl: './rating-media.component.html',
  styleUrls: ['./rating-media.component.css']
})
export class RatingMediaComponent {
  rating: any;
  userRating: any;
  token: any;
  rateMedia: number[] = [];
  rateMedia$: number = 0;
  restRateMedia: number[] = [];
  restRateMedia$: number = 0;
  userId: any;
  mediaId: any;

  constructor(
    private mediaService: MediaService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.mediaId = params['id'];
      this.token = this.userService.getTokenUser();

      this.userService.getUserByToken(this.token).subscribe((response) => {
        this.userId = response.userId;

        this.mediaService.getRatingMediaByUser(this.mediaId, this.userId).subscribe((response) => {
          this.userRating = response;

          if (this.userRating != 0) {
            this.ratingMedia(this.userRating, false);
          }
        });
      });
    });
  }

  ratingMedia(rate: number, isNew: boolean): void {
    this.rateMedia$ = rate;
    for (let i = 1; i <= this.rateMedia$; i++) {
      this.rateMedia.push(i);
    }

    this.restRateMedia$ = 5 - rate;
    for (let i = 1; i <= this.restRateMedia$; i++) {
      this.restRateMedia.push(i);
    }

    if (isNew) {
      this.mediaService.createRatingMedia(this.mediaId, rate, this.token).subscribe((response) => {
      });
    }
  }
}
