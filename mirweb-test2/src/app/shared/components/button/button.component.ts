import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @ViewChild('btn') button: any;
  @Input() icon?: string;
  @Input() look: 'fill' | 'outline' | 'icon' | 'menu' | 'label' | '' = 'fill';
  @Input() color: 'primary' | 'accent' = 'primary';
  @Input() size: 'medium' | 'small' = 'medium';
  @Input() disabled: boolean = false;

  constructor() {}

  @Input() onClick: Function = () => {};

  ngOnInit(): void {}

  iconSize(): number {
    if (this.size === 'medium') return 24;
    return 16;
  }

  isRegularButton(): boolean {
    return this.look === 'fill' || this.look === 'outline';
  }
}
