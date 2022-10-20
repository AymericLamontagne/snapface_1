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
    // Authentification check
    console.log('this is ok')
    // this.auth.login();
    // Send user in Mir-RT
    this.router.navigateByUrl('/mode-rt');
  }
}
