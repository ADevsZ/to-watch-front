import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/model/Media';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit{
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
  
      this.mediaService.getFilmById(this.id).subscribe(response => {
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
