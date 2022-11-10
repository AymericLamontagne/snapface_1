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
}
