import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsTestRoutingModule } from './tools-test-routing.module';
import { ToolsTestComponent } from './components/tools-test/tools-test.component';
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";


@NgModule({
  declarations: [
    ToolsTestComponent
  ],
  imports: [
    CommonModule,
    ToolsTestRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ToolsTestModule {
}
