import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { AuthenticationService } from "../../shared/authentication-service";
import { UserService } from '../../services/UserService'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '', role: '', displayName: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public authService: AuthenticationService,
    public userService: UserService
  ) { }

  onLogin(form: NgForm) {
    const { username, password } = this.login
    this.authService.SignIn(username, password).then(res => {
      console.log(res);
      this.router.navigateByUrl('/app/tabs/speakers');
    }).catch(error => {
      window.alert(error.message)
    })
    // this.userService.user$.toPromise().then(res => {
    //   console.log(res);

    // })
    // this.submitted = true;

    // if (form.valid) {
    //   this.userData.login(this.login.username);
    //   this.router.navigateByUrl('/app/tabs/schedule');
    // }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
