import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/core/interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private selectedItems$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() { }

  public getSelectedData() {
    return this.selectedItems$.asObservable();
  }

  public setSelectedData(data: Item[]) {
    this.selectedItems$.next(data);
  }
}
