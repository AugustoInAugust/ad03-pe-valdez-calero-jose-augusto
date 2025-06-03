import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from 'src/app/core/interfaces/item.interface';
import { selectAllItems } from './store/selectors/item.selectors';
import { deleteItem, loadItems } from './store/actions/item.actions';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items: Item[] = [];
  public selectedItems = new Set<string>();
  public selectedItems$ = new BehaviorSubject<Set<string>>(this.selectedItems);

  private items$: Observable<Item[]> = this.store.select(selectAllItems);
  private destroy$ = new Subject<void>();

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.loadItemsData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onToggleSelect(item: Item) {
    if (this.selectedItems.has(item.id)) {
      this.selectedItems.delete(item.id);
    } else {
      this.selectedItems.add(item.id);
    }
    this.selectedItems$.next(new Set(this.selectedItems));
  }

  public onItemClicked(item: Item) {
    console.log('Card clicked:', item);

  }

  public onDelete(item: Item) {
    if (item) {
      this.store.dispatch(deleteItem({ id: item.id }));
    }
  }

  private loadItemsData() {
    this.store.dispatch(loadItems());
    this.items$
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => this.items = items);
  }
}
