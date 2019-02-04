import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

//import { ApiProvider } from '../../providers/api/api';
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
              //public apiProvider: ApiProvider,
              private storage: Storage) {

    this.credentialsForm = this.formBuilder.group({
	    email: [''],
      code: ['']
    });
  }

  onLogin() {
    if (this.credentialsForm.valid) {
      let email: string = this.credentialsForm.controls['email'].value;
      let code: string = this.credentialsForm.controls['code'].value;
      /*this.apiProvider.login(email, password)
      .then(data => {
        if (data['auth'] == true) {
          this.storage.set('token', data['token']);
          this.storage.set('logged', true);
        } else console.log(data);
      });*/
      this.storage.set('logged', true);
      this.redirectToRoot();
    }
  }

  /*getUsers(email: string, password: string) {
    this.apiProvider.getUsers()
    .then(data => {
      for(let i = 0; i < Object.keys(data).length; i++) {
        if (data[i].email == email && data[i].password == password) {
          console.log(data[i]);
          this.storage.set('id', data[i].id);
          this.storage.set('name', data[i].firstname);
          this.storage.set('logged', true);
          window.location.reload();
          //storage.set('lastname', data[i].lastname);
          //storage.set('email', data[i].email);
          //this.setItems();
          //console.log(this.comments);
        }
      }
      this.redirectToRoot();
      //this.setItems();
      //console.log(this.films);
    });
  }*/

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