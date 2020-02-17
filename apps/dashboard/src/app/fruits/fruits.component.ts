
import { FruitsFacade } from './../../../../../libs/core-state/src/lib/fruits/fruits.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Fruit } from '@mdv-twenty/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-twenty-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  form: FormGroup;
  selectedFruit$: Observable<Fruit> = this.fruitsFacade.selectedFruit$;
  fruits$: Observable<Fruit[]> = this.fruitsFacade.allFruits$;

  constructor(
      private fb: FormBuilder,
      private fruitsFacade: FruitsFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.fruitsFacade.loadFruits();
      this.selectFruit({ id: null } as Fruit);
  }

  selectFruit(fruit: Fruit) {
      this.form.patchValue(fruit);
      this.fruitsFacade.selectFruit(fruit.id);
  }

  cancel() {
      this.selectFruit({ id: null } as Fruit);
      this.form.reset();
  }

  saveFruit(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.fruitsFacade.updateFruit(this.form.value);
          this.selectFruit({ id: null } as Fruit);
      } else {
          this.fruitsFacade.createFruit(this.form.value);
          this.selectFruit({ id: null } as Fruit);
      }
  }

  deleteFruit(fruit: Fruit) {
      this.fruitsFacade.deleteFruit(fruit);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          name: ['', Validators.compose([Validators.required])],
          family: ['', Validators.compose([Validators.required])],
          nutritions: this.fb.group({
            carbihydrates: [''],
            protein: [''],
            fat: [''],
            calories: [''],
            sugar: ['']
          })
      })
  }

}
