import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/core/interfaces/item.interface';

export const loadItems = createAction('[Item] Load Items');

export const addItem = createAction(
  '[Item] Add Item',
  props<{ item: Item }>()
);

export const updateItem = createAction(
  '[Item] Update Item',
  props<{ item: Item }>()
);

export const deleteItem = createAction(
  '[Item] Delete Item',
  props<{ id: string }>()
);
