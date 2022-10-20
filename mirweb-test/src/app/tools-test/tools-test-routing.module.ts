import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsTestComponent } from "./components/tools-test/tools-test.component";

const routes: Routes = [
  { path: '', component: ToolsTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsTestRoutingModule {
}
