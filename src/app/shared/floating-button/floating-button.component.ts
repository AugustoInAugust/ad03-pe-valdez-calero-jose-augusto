import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit {
  @Input() badge?: string | number;
  @Input() iconSrc?: string;
  @Input() index: number = 0;
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.clicked.emit();
  }

  public calcBottomOffset(): string {
    const offset = 70;
    return `${1 * this.index * offset + 1}px`;
  }
}
