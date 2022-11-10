import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-info',
  templateUrl: './grid-info.component.html',
  styleUrls: ['./grid-info.component.scss'],
})
export class GridInfoComponent implements OnInit {
  screenHeight!: any;
  screenWidth!: any;
  colSize!: number;
  rowSize!: number;

  @Input() dataSource: any;
  @Input() displayedColumns!: string[];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(): number {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    return this.screenHeight / this.screenWidth;
  }

  isMobile(): boolean {
    return this.getScreenSize() > 0.9;
  }

  colCalc(): number {
    if (this.isMobile()) {
      return 66;
    } else {
      return 22;
    }
  }

  rowCalc(): number {
    if (this.isMobile()) {
      return 3;
    } else {
      return 2;
    }
  }
}
