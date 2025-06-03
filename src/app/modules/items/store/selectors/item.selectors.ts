import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState } from 'src/app/core/interfaces/item.interface';

export const selectItemState = createFeatureSelector<ItemState>('items');

export const selectAllItems = createSelector(
  selectItemState,
  (state) => state.items
);
