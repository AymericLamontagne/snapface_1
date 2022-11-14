import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DialogPieceComponent } from '../dialog-piece/dialog-piece.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';

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

  constructor(public dialog: NgDialogAnimationService) {}

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

  openPieceDialog(): void {
    let dialogRef = this.dialog.open(DialogPieceComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '100%',
      animation: { to: 'top' },
      position: {
        bottom: '0px',
        left: '0px',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('le result : ' + result);
    });
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
