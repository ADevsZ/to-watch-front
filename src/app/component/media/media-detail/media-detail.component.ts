import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Media, StreamingPlatformMedia } from 'src/app/model/Media';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {
  id: any;
  media: any;
  image: any;
  streamingPlatforms: any;
  averageRating = 0;
  userRating: any;
  token: any;
  userId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mediaService: MediaService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.media = this.id;

      this.mediaService.getMediaById(this.id).subscribe((response: Media) => {
        this.media = response;
        this.image = `/assets/images/${this.id}-photo.jpg`;
      });

      this.mediaService.getAllPlatformsByMedia(this.id).subscribe((response: StreamingPlatformMedia[]) => {
        this.streamingPlatforms = response;
      });

      this.mediaService.getAverageRatingMedia(this.id).subscribe((response) => {
        if (response != null) {
          this.averageRating = response;
        }

      });
    });
  }

  ngOnInit() { }

  volver() {
    this.activatedRoute.url.subscribe((url) => {
      this.router.navigate([url[0].path]);
    });
  }
}
