import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { AuthenticationService } from "../../shared/authentication-service";
import { UserService } from '../../services/UserService'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '', role: '', displayName: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public authService: AuthenticationService,
    private userService: UserService
  ) { }

  async onSignup(form: NgForm) {
    const { username, password, role, displayName } = this.signup
    console.log(this.signup);

    this.userService.create(displayName, username, password, role).toPromise().then(async (res) => {
      console.log(res);
      // await this.authService.SendVerificationMail()
    }).catch(error => {
      window.alert(error.message)
    })
  }
}
