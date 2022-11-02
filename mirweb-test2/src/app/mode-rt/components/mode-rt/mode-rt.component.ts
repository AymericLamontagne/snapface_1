import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TraductorService } from '../../services/traductor.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { HostListener } from '@angular/core';

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
  encapsulation: ViewEncapsulation.None,
})
export class ModeRtComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  panelOpenState = false;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  currentDate = new Date();
  traductor!: TraductorService;
  langCtrl!: FormControl;
  screenHeight!: any;
  screenWidth!: any;

  @Input() item: any;
  items = [
    {
      title: 'title1',
      description: 'desc1',
      content: 'content1',
    },
    {
      title: 'title2',
      description: 'desc2',
      content: 'content2',
    },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private traductorService: TraductorService,
    private formBuilder: FormBuilder
  ) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.traductor = this.traductorService;

    this.langCtrl = this.formBuilder.control(this.traductorService.locales[0].value);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(): number {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(
      this.screenHeight,
      this.screenWidth,
      this.screenHeight / this.screenWidth
    );
    return this.screenHeight / this.screenWidth;
  }

  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: PeriodicElement) => `${element.weight}`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: PeriodicElement) => `${element.symbol}`,
    },
  ];

  updateLocale() {
    const newLang = this.langCtrl.value;
    this.traductorService.updateLocale(newLang);
  }

  toggleTheme() {
    if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
}
