import { createReducer, on } from '@ngrx/store';
import { initialItemState } from '../item.state';
import * as ItemActions from '../actions/item.actions';
import { Item } from 'src/app/core/interfaces/item.interface';

function updateLocalStorage(items: Item[]) {
  localStorage.setItem('items', JSON.stringify(items));
}

export const itemReducer = createReducer(
  initialItemState,
  on(ItemActions.loadItems, (state) => {
    const stored = JSON.parse(localStorage.getItem('items') || '[]');
    return { ...state, items: stored };
  }),

  on(ItemActions.addItem, (state, { item }) => {
    const fullItem = { ...item, id: Date.now().toString() };
    const updated = [...state.items, fullItem];
    updateLocalStorage(updated);
    return { ...state, items: updated };
  }),

  on(ItemActions.updateItem, (state, { item }) => {
    const updated = state.items.map(i => i.id === item.id ? item : i);
    updateLocalStorage(updated);
    return { ...state, items: updated };
  }),

  on(ItemActions.deleteItem, (state, { id }) => {
    const updated = state.items.filter(i => i.id !== id);
    updateLocalStorage(updated);
    return { ...state, items: updated };
  })
);
