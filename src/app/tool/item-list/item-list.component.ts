import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  // @Input() item;
  // @Input() first;
  // @Input() last;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  ngOnInit() { }

  subirItem() {
    this.up.emit();
  }

  bajarItem() {
    this.down.emit();
  }
}
