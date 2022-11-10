import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-piece',
  templateUrl: './dialog-piece.component.html',
  styleUrls: ['./dialog-piece.component.scss'],
})
export class DialogPieceComponent implements OnInit {
  panelOpenState = false;
  expTitle: string[] = ['Code', 'Description', 'Inventaire'];

  pieceData = [
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue Michelin Sport 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing de roue std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue Michelin Sport 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing de roue std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue Michelin Sport 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing de roue std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue Michelin Sport 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing de roue std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue Michelin Sport 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing de roue std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue Michelin Sport 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing de roue std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue Michelin Sport 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing de roue std', price: 210, inventory: 12 },
  ];

  nbrResultat = this.pieceData.length;

  constructor(public dialogRef: MatDialogRef<DialogPieceComponent>) {}

  ngOnInit(): void {}
}
