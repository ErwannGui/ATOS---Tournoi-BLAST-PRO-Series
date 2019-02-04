import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { BottomBannerComponent } from '../components/bottom-banner/bottom-banner';
import { CustomRefresherComponent } from '../components/custom-refresher/custom-refresher';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BottomBannerComponent,
    HomePage,
    ListServicePage,
    LoginPage,
    BetPage,
    ContactPage,
    DetailsServicePage,
    DonationPage,
    MapPage,
    MatchPage,
    PlanningPage,
    SettingPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListServicePage,
    LoginPage,
    BetPage,
    ContactPage,
    DetailsServicePage,
    DonationPage,
    MapPage,
    MatchPage,
    PlanningPage,
    SettingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
