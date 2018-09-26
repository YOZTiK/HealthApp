import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


//Pages & modals
import {
  ChallengeDescriptionPage,
  NewsfeedDetailsPage,
  PaymentsPage,
  SettingsConfPage,
  SettingsPage,
  NewsfeedPage,
  DashboardPage,
  TutorialPage,
  TabsPage } from '../pages/index.pages';

import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

//Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    //Modals
    ChallengeDescriptionPage,
    NewsfeedDetailsPage,
    PaymentsPage,
    SettingsConfPage,
    //Pages
    TutorialPage,
    SettingsPage,
    NewsfeedPage,
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
    NewsfeedDetailsPage,
    PaymentsPage,
    SettingsConfPage,
    //Pages
    TutorialPage,
    SettingsPage,
    NewsfeedPage,
    DashboardPage,
    LoginPage,
    SignUpPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
