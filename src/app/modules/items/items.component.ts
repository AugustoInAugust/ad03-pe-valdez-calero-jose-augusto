import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item, ItemState } from 'src/app/core/interfaces/item.interface';
import { selectAllItems } from './store/selectors/item.selectors';
import { deleteItem, loadItems } from './store/actions/item.actions';
import { takeUntil } from 'rxjs/operators';
import { ItemsService } from './services/items.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items: Item[] = [];
  public searchTerm: string = '';
  public filteredItems: Item[] = [];
  public showModal: boolean = false;
  public modalHeader: string = '';
  public selectedItem?: Item;
  public selectedItems: Item[] = [];

  private items$: Observable<Item[]> = this.store.select(selectAllItems);
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<ItemState>,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.loadItemsData();
    this.waitForItemsSelection();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onToggleSelect(item: Item) {
    const index = this.selectedItems.findIndex(i => i.id === item.id);
    index > -1 ? this.selectedItems.splice(index, 1) : this.selectedItems.push(item);

    this.itemsService.setSelectedData(this.selectedItems);
  }

  public onUpdateItem(item: Item) {
    this.showModal = true;
    this.modalHeader = 'Update Item';
    this.selectedItem = item;
  }

  public onCreateItem() {
    this.selectedItem = undefined;
    this.showModal = true;
    this.modalHeader = 'Create Item';
  }

  public onDelete(item: Item) {
    if (item) this.store.dispatch(deleteItem({ id: item.id }));
  }

  public onSearch() {
    this.applyFilter();
  }

  public onShareItems() {
    console.log('Selected items to share:', this.selectedItems);
    this.selectedItems = [];
    this.itemsService.setSelectedData(this.selectedItems);
  }

  public clearSearch() {
    this.searchTerm = '';
    this.applyFilter();
  }

  public hideModal() {
    this.selectedItem = undefined;
    this.showModal = false;
  }

  public isItemSelected(item: Item): boolean {
    return this.selectedItems.some(selected => selected.id === item.id);
  }

  private loadItemsData() {
    this.store.dispatch(loadItems());
    this.items$
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => this.refreshItems(items));
  }

  private refreshItems(items: Item[]) {
    this.items = items;
    this.applyFilter();
  }

  private applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredItems = this.items.filter(({ title, description }) => title.toLowerCase().includes(term) || description.toLowerCase().includes(term));
  }

  private waitForItemsSelection() {
    this.itemsService.getSelectedData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(selections => this.selectedItems = selections);
  }
}
