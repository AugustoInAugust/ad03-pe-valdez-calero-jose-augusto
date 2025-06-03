import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemStatusEnum } from 'src/app/core/enums/item-status.enum';
import { Item } from 'src/app/core/interfaces/item.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item!: Item;
  @Input() selected = false;
  
  @Output() toggleSelect = new EventEmitter<string>();
  @Output() clicked = new EventEmitter<string>();
  @Output() deleted = new EventEmitter<string>();

  public statusColors: Record<ItemStatusEnum, string> = {
    FrontEnd: 'bg-color-blue',
    BackEnd: 'bg-color-red',
    FullStack: 'bg-color-orange',
    DevOps: 'bg-color-green',
    QA: 'bg-color-purple',
    Architect: 'bg-color-pink',
  };

  constructor() { }

  ngOnInit(): void { }

  public onToggleSelect(event: Event) {
    event.stopPropagation();
    this.toggleSelect.emit(this.item.id);
  }

  public onClick() {
    this.clicked.emit(this.item.id);
  }

  public onDelete(event: Event) {
    event.stopPropagation();
    this.deleted.emit(this.item.id);
  }
}
