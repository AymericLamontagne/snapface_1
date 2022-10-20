import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";


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

/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
@Component({
  selector: 'app-tools-test',
  templateUrl: './tools-test.component.html',
  styleUrls: ['./tools-test.component.scss']
})
export class ToolsTestComponent implements AfterViewInit {
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
