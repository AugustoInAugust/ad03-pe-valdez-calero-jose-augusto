import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemCardComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,

  ]
})
export class ItemsModule { }
