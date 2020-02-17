import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Fruit } from '@mdv-twenty/core-data';

@Component({
  selector: 'mdv-twenty-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent implements OnInit {
  @Input() fruits: Fruit[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(fruit: Fruit) {
    this.selected.emit(fruit);
  }

  delete(fruit: Fruit) {
    this.deleted.emit(fruit);
  }
}
