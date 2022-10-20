import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 12, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 13, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 14, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 15, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 16, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 17, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-mode-rt',
  templateUrl: './mode-rt.component.html',
  styleUrls: ['./mode-rt.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModeRtComponent implements AfterViewInit {
  tiles: Tile[] = [
    { text: 'Asset', cols: 3, rows: 2, color: 'white' },
    { text: 'Reason (R)', cols: 3, rows: 2, color: 'white' },
    { text: 'Component (C)', cols: 3, rows: 2, color: 'white' },
    { text: 'NONE', cols: 3, rows: 2, color: 'invisible' },
    { text: 'Asset Info', cols: 3, rows: 6, color: 'white' },
    //{ text: 'Parts', cols: 9, rows: 6, color: 'lightgreen' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${ element.position }`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${ element.name }`,
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: PeriodicElement) => `${ element.weight }`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: PeriodicElement) => `${ element.symbol }`,
    },
  ];

}
