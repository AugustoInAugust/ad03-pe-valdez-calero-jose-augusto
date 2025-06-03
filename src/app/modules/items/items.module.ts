import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [
    ItemCardComponent,
    ItemsComponent,
    ItemFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,
    SharedModule,
    PipesModule,
    ReactiveFormsModule,
  ]
})
export class ItemsModule { }
