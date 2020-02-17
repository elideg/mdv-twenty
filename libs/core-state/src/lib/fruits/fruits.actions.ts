import { createAction, props } from '@ngrx/store';

import { Fruit } from '@mdv-twenty/core-data';

export const fruitSelected = createAction(
  '[FRUIT] Fruit Selected',
  props<{ selectedFruitId: string }>()
);

// Load Actions
export const loadFruits = createAction('[FRUIT] Load Fruits');

export const fruitsLoaded = createAction(
  '[FRUIT] Fruits Loaded',
  props<{ fruits: Fruit[] }>()
);

// Create Actions
export const createFruit = createAction(
  '[FRUIT] Create Fruit',
  props<{ fruit: Fruit }>()
);

export const fruitCreated = createAction(
  '[FRUIT] Fruit Created',
  props<{ fruit: Fruit }>()
);

// Update Actions
export const updateFruit = createAction(
  '[FRUIT] Update Fruit',
  props<{ fruit: Fruit }>()
);

export const fruitUpdated = createAction(
  '[FRUIT] Fruit Updated',
  props<{ fruit: Fruit }>()
);

// Delete Actions
export const deleteFruit = createAction(
  '[FRUIT] Delete Fruit',
  props<{ fruit: Fruit }>()
);

export const fruitDeleted = createAction(
  '[FRUIT] Fruit Deleted',
  props<{ fruit: Fruit }>()
);
