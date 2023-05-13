import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  id: any;
  media: any;
  image: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mediaService: MediaService
    ) {
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      });
  
      this.mediaService.getMediaById(this.id).subscribe(response => {
        this.media = response;
      });
      this.image = `/assets/images/${this.id}-photo.jpg`;
    }

  ngOnInit(){
  }

  volver() {
    this.router.navigate(['films']);
  }
}
