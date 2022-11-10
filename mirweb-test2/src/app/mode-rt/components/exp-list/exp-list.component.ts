import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss'],
})
export class ExpListComponent implements OnInit {
  panelOpenState = false;
  expTitle: string[] = ['Code', 'Description', 'Inventaire'];

  pieceData = [
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing std', price: 210, inventory: 12 },
    { code: 'G40-Ws', description: 'Capot Sport', price: 460, inventory: 2 },
    { code: 'G20RT', description: 'Roue 28R', price: 232, inventory: 8 },
    { code: '403-1003', description: 'Bearing std', price: 210, inventory: 12 },
  ];

  ngOnInit(): void {}
}
