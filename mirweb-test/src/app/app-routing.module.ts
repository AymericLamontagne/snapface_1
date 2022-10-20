import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tools-test',
    loadChildren: () =>
      import('./tools-test/tools-test.module').then(
        (m) => m.ToolsTestModule
      ),
  },
  {
    path: 'complex-form',
    loadChildren: () =>
      import('./complex-form/complex-form.module').then(
        (m) => m.ComplexFormModule
      ),
  },
  {
    path: 'reactive-state',
    loadChildren: () =>
      import('./reactive-state/reactive-state.module').then(
        (m) => m.ReactiveStateModule
      ),
  },
  { path: '**', redirectTo: 'tools-test' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
