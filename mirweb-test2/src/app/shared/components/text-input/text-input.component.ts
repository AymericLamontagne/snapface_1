import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input() type: 'text' | 'password' = 'text';
  @Input() width: number = 200;
  @ViewChild('textInput') textInput: any;

  constructor() {}

  ngOnInit(): void {}

  sizeStyles(): string {
    return `border-width: 2px;
    border-radius: 9999px;
    padding: 1px;
    color: #2d2d2d;
    width: ${this.width}px;`;
  }
}
