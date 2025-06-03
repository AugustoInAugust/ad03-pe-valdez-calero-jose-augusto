import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ItemStatusEnum } from 'src/app/core/enums/item-status.enum';
import { Item, ItemState } from 'src/app/core/interfaces/item.interface';
import { addItem, updateItem } from '../../store/actions/item.actions';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @Input() item?: Item;

  @Output() submitted = new EventEmitter<Item>();

  public itemForm!: FormGroup;
  public itemStatusEnum = ItemStatusEnum;

  constructor(private store: Store<ItemState>) { }

  ngOnChanges() {
    if (this.item) this.updateFormValues(this.item);
  }

  ngOnInit(): void {
    this.itemForm = this.buildForm();
  }

  public onSubmit(): void {
    if (this.itemForm.valid) {
      const data: Item = this.prepareDataForSave();
      this.item ? this.updateCurrentItem(data) : this.createNewItem(data);
      this.submitted.emit(data);
    }
  }

  private buildForm() {
    return new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      status: new FormControl('', [Validators.required]),
    });
  }

  private updateFormValues(item: Item) {
    this.itemForm.patchValue(item);
  }

  private prepareDataForSave(): Item {
    return {
      ...this.itemForm.value,
      ...(this.item
        ? { update_date: new Date() }
        : { creation_date: new Date() }),
    };
  }

  private updateCurrentItem(item: Item) {
    this.store.dispatch(updateItem({ item }));
  }

  private createNewItem(item: Item) {
    this.store.dispatch(addItem({ item }));
  }
}
