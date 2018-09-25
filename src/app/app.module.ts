import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ChallengeDescriptionPage,
  PaymentsPage,
  SettingsConfPage,
  SettingsPage,
  DetailsPage,
  DashboardPage,
  TabsPage } from '../pages/index.pages';

import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    //Modals
    ChallengeDescriptionPage,
    PaymentsPage,
    SettingsConfPage,
    //Pages
    SettingsPage,
    DetailsPage,
    DashboardPage,
    LoginPage,
    SignUpPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Modals
    ChallengeDescriptionPage,
    PaymentsPage,
    SettingsConfPage,
    //Pages
    SettingsPage,
    DetailsPage,
    DashboardPage,
    LoginPage,
    SignUpPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
