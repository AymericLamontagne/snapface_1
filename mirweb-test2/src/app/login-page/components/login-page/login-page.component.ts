import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginPageService } from "../../services/login-page.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginPageService: LoginPageService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.router.navigateByUrl('/mode-rt');
  }
}
