import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./login-page/components/login-page/login-page.component";

const routes: Routes = [
  {
    path: 'login-page',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'tools-test',
    loadChildren: () =>
      import('./tools-test/tools-test.module').then(
        (m) => m.ToolsTestModule
      ),
  },
  {
    path: 'mode-rt',
    loadChildren: () =>
      import('./mode-rt/mode-rt.module').then(
        (m) => m.ModeRtModule
      ),
  },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
