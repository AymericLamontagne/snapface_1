import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from "../shared/shared.module";
import { RouterLinkWithHref } from "@angular/router";


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLinkWithHref
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule {
}
