import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-media',
  templateUrl: './card-media.component.html',
  styleUrls: ['./card-media.component.css']
})
export class CardMediaComponent {
  @Input() media: any;

}
