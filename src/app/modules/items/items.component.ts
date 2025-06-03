import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MOCK_ITEMS } from 'src/app/core/constants/items';
import { Item } from 'src/app/core/interfaces/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  //items: Item[] = []; // carga inicial o mock
  items: Item[] = MOCK_ITEMS; // carga inicial o mock
  selectedItems = new Set<string>();
  selectedItems$ = new BehaviorSubject<Set<string>>(this.selectedItems);
  
  constructor() { }

  ngOnInit(): void {
  }


  onToggleSelect(id: string) {
    if (this.selectedItems.has(id)) {
      this.selectedItems.delete(id);
    } else {
      this.selectedItems.add(id);
    }
    this.selectedItems$.next(new Set(this.selectedItems));
  }

  onItemClicked(id: string) {
    console.log('Card clicked:', id);
    // abrir modal editar
  }

  onDelete(id: string) {
    console.log('Delete item:', id);
    // eliminar item de lista
  }
}
