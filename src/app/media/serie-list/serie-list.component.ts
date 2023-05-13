import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit{
  series: any;

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.mediaService.getAllSeries().subscribe(response => {
      this.series = response;
    });
  }
  
}
