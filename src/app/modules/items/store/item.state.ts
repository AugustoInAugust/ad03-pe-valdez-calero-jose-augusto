import { ItemState } from "src/app/core/interfaces/item.interface";

export const initialItemState: ItemState = {
  items: JSON.parse(localStorage.getItem('items') || '[]')
};