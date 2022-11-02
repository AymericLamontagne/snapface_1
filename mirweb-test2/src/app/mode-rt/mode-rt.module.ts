import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeRtRoutingModule } from './mode-rt-routing.module';
import { ModeRtComponent } from './components/mode-rt/mode-rt.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslocoModule } from '@ngneat/transloco';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpListComponent } from './components/exp-list/exp-list.component';

@NgModule({
  declarations: [ModeRtComponent, ExpListComponent],
  imports: [
    CommonModule,
    ModeRtRoutingModule,
    SharedModule,
    MaterialModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    TranslocoModule,
    MatExpansionModule,
  ],
})
export class ModeRtModule {}
