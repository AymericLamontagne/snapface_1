import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeRtComponent } from './components/mode-rt/mode-rt.component';
import { ExpListComponent } from './components/exp-list/exp-list.component';

const routes: Routes = [
  { path: '', component: ModeRtComponent },
  { path: 'exp-list', component: ExpListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeRtRoutingModule {}
