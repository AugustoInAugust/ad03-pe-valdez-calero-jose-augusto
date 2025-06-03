import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';

@NgModule({
  declarations: [ModalComponent, FloatingButtonComponent],
  imports: [CommonModule],
  exports: [ModalComponent, FloatingButtonComponent]
})
export class SharedModule { }
