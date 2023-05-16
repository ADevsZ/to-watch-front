import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MediaService } from 'src/app/service/media.service';
import { SearchbarComponent } from 'src/app/tool/searchbar/searchbar.component';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit, AfterViewInit{
  films: any;
  searchText?: string;
  @ViewChild(SearchbarComponent) searchBar?: { "": string | undefined; };

  constructor(
    private mediaService: MediaService
  ) {
    this.mediaService.getAllFilms().subscribe(response => {
      this.films = response;
    });
   }

  ngAfterViewInit() {
    // this.searchText = this.searchBar
  }

  ngOnInit() {
  }

}
