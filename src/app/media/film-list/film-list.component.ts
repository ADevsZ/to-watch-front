import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit{
  films: any;
  public page!: number;

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.mediaService.getAllFilms().subscribe(response => {
      this.films = response;
    });
  }

}
