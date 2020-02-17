import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromFruits from './fruits.reducer';
import * as fruitsActions from './fruits.actions';
import * as fruitsSelectors from './fruits.selectors';
import { Fruit } from '@mdv-twenty/core-data';

@Injectable({
  providedIn: 'root'
})
export class FruitsFacade {
  allFruits$ = this.store.pipe(select(fruitsSelectors.selectAllFruits));
  selectedFruit$ = this.store.pipe(select(fruitsSelectors.selectFruit));
  fruitLoading$ = this.store.pipe(select(fruitsSelectors.selectFruitsLoading));

  constructor(private store: Store<fromFruits.FruitsPartialState>) {}

  selectFruit(selectedFruitId: string) {
    this.dispatch(fruitsActions.fruitSelected({ selectedFruitId }));
  }

  loadFruits() {
    this.dispatch(fruitsActions.loadFruits());
  }

  createFruit(fruit: Fruit) {
    this.dispatch(fruitsActions.createFruit({ fruit }));
  }

  updateFruit(fruit: Fruit) {
    this.dispatch(fruitsActions.updateFruit({ fruit }));
  }

  deleteFruit(fruit: Fruit) {
    this.dispatch(fruitsActions.deleteFruit({ fruit }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
