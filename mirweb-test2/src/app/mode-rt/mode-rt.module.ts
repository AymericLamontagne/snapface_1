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
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPieceComponent } from './components/dialog-piece/dialog-piece.component';
import { GridInfoComponent } from './components/grid-info/grid-info.component';
import { CommentsCardComponent } from './components/comments-card/comments-card.component';
import { UnitInfoComponent } from './components/unit-info/unit-info.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { PiecePageComponent } from './components/piece-page/piece-page.component';

@NgModule({
  declarations: [
    ModeRtComponent,
    ExpListComponent,
    DialogPieceComponent,
    GridInfoComponent,
    CommentsCardComponent,
    UnitInfoComponent,
    MenuPageComponent,
    PiecePageComponent,
  ],
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
    FormsModule,
    MatDialogModule,
  ],
})
export class ModeRtModule {}
