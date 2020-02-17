import { FruitsFacade } from './fruits.facade';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fruitsActions from './fruits.actions';
import { Fruit, FruitsService, NotifyService } from '@mdv-twenty/core-data';
import { FruitsPartialState } from './fruits.reducer';

@Injectable()
export class FruitsEffects {
  loadFruits$ = createEffect(() =>
    this.dataPersistence.fetch(fruitsActions.loadFruits, {
      run: (
        action: ReturnType<typeof fruitsActions.loadFruits>,
        state: FruitsPartialState
      ) => {
        return this.fruitsService.all().pipe(
          map((fruits: Fruit[]) => fruitsActions.fruitsLoaded({ fruits }))
        );
      },
      onError: (action: ReturnType<typeof fruitsActions.loadFruits>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addFruit$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(fruitsActions.createFruit, {
      run: (
        action: ReturnType<typeof fruitsActions.createFruit>,
        state: FruitsPartialState
      ) => {
        return this.fruitsService.create(action.fruit).pipe(
          map((fruit: Fruit) => fruitsActions.fruitCreated({ fruit })),
          tap(() => this.notify.notify('Successfully Added a Fruit'))
        );
      },
      onError: (action: ReturnType<typeof fruitsActions.createFruit>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateFruit$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(fruitsActions.updateFruit, {
      run: (
        action: ReturnType<typeof fruitsActions.updateFruit>,
        state: FruitsPartialState
      ) => {
        return of(action.fruit).pipe(
          map((fruit: Fruit) => fruitsActions.fruitUpdated({ fruit })),
          tap(() => this.notify.notify('Successfully Updated a Fruit'))
        );
      },
      onError: (action: ReturnType<typeof fruitsActions.updateFruit>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteFruit$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(fruitsActions.deleteFruit, {
      run: (
        action: ReturnType<typeof fruitsActions.deleteFruit>,
        state: FruitsPartialState
      ) => {
        return of(action.fruit).pipe(
          map((fruit: Fruit) => fruitsActions.fruitDeleted({ fruit })),
          tap(() => this.notify.notify('Successfully Deleted a Fruit')),
        );
      },
      onError: (action: ReturnType<typeof fruitsActions.deleteFruit>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<FruitsPartialState>,
    private fruitsService: FruitsService,
    private notify: NotifyService,
    private fruitsFacade: FruitsFacade
  ) {}
}
