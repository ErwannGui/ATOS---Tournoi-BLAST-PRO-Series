import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HomePage } from '../../pages/home/home';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private storage: Storage) {

    this.credentialsForm = this.formBuilder.group({
	    email: [''],
      code: [''],
      save: [true],
    });
  }

  onLogin() {
    if (this.credentialsForm.valid) {
      let email: string = this.credentialsForm.controls['email'].value;
      let code: string = this.credentialsForm.controls['code'].value;
      let save: boolean = this.credentialsForm.controls['save'].value;
      this.storage.set('logged', true);
      this.redirectToRoot();
    }
  }

  onForgotPassword() {
    //this.logger.info('LoginPage: onForgotPassword()');
    this.redirectToRoot();
  }

  redirectToRoot() {
    /*this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();*/
    window.location.reload();
  }

}