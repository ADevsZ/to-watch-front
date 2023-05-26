import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaSearchService } from 'src/app/service/media-search.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [MediaSearchService]
})
export class SearchbarComponent implements OnInit{
  @Input() media: any;
  public keyword = "title";

  constructor (
    private router: Router) { }

  ngOnInit () { }

  selectEvent(item: any) {
    var urlType = "";

    if (item.type == 'Film') {
      urlType = "/films/";
    } else {
      urlType = "/series/";
    }

    this.router.navigate([urlType + item.mediaId]);
  }
}
