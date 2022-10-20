import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeRtComponent } from "./components/mode-rt/mode-rt.component";

const routes: Routes = [
  { path: '', component: ModeRtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeRtRoutingModule {
}
