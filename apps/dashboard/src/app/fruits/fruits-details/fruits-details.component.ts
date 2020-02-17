import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Fruit } from '@mdv-twenty/core-data';

@Component({
  selector: 'mdv-twenty-fruits-details',
  templateUrl: './fruits-details.component.html',
  styleUrls: ['./fruits-details.component.scss']
})
export class FruitsDetailsComponent implements OnInit {
  originalName;
  currentFruit: Fruit

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set fruit(value) {
    if (value) this.originalName = value.name;
      this.currentFruit = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(fruit: Fruit) {
    this.saved.emit(fruit);
  }

  cancel() {
    this.cancelled.emit();
  }

  apiUsed() {
    window.open('https://www.fruityvice.com')
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
