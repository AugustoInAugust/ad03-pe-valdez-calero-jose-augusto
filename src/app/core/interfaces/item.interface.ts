import { ItemStatusEnum } from "../enums/item-status.enum";

export interface Item {
  id: string;
  title: string;
  description: string;
  status: ItemStatusEnum;
  creation_date: string;
  update_date?: string;
}

export interface ItemState {
  items: Item[];
}