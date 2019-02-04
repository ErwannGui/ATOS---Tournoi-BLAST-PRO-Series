import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListServicePage } from '../pages/listService/listService';
import { LoginPage } from '../pages/login/login';
import { BetPage } from '../pages/bet/bet';
import { ContactPage } from '../pages/contact/contact';
import { DetailsServicePage } from '../pages/details-service/details-service';
import { DonationPage } from '../pages/donation/donation';
import { MapPage } from '../pages/map/map';
import { MatchPage } from '../pages/match/match';
import { PlanningPage } from '../pages/planning/planning';
import { SettingPage } from '../pages/setting/setting';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  logged: boolean;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();
    this.isLogged();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Services', component: ListServicePage },
      { title: 'Planning', component: PlanningPage },
      { title: 'Map', component: MapPage },
      { title: 'Bet', component: BetPage },
      { title: 'Donation', component: DonationPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  isLogged() {
    this.storage.get('logged').then((val) => {
      if (val !== true) {
        this.logged = false;
        this.rootPage = LoginPage;
      } else {
        this.logged = true;
        this.rootPage = HomePage;
      }
    });
  }

  doLogout() {
    this.storage.clear();
    window.location.reload();
    //this.apiProvider.logout();
  }
}
