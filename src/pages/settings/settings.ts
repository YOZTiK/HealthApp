import { Component } from '@angular/core';
import {
  AlertController,
  NavController,
  LoadingController,
  ModalController,
  ActionSheetController,
  Platform
} from 'ionic-angular';

import { CouponsPage } from '../modals/coupons/coupons';
import { LoginPage } from '../login/login';
import { SettingsConfPage } from '../modals/settings-conf/settings-conf';
import { PaymentsPage } from '../modals/payments/payments';

@Component({
  selector: 'page-about',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor( public navCtrl: NavController,
               public alertCtrl: AlertController,
               public loadingCtrl: LoadingController,
               public modalCtrl: ModalController,
               public platform: Platform,
               public actionSheetCtrl: ActionSheetController) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openCoupons(){
    console.log('Open Coupon modal');

    let modal = this.modalCtrl.create(CouponsPage);
    modal.present();
    modal.onDidDismiss(data => {

      console.log(data);
    });
  }

  openSettings(){
    let modal = this.modalCtrl.create(SettingsConfPage);
    modal.present();
    modal.onDidDismiss(data => {

      console.log(data);
    });
  }

  openPayments(){
    let modal = this.modalCtrl.create(PaymentsPage);
    modal.present();
    modal.onDidDismiss(data => {

      console.log(data);
    });
  }

  appLogOut(){
    /*this.showAlert('Log out');*/
    this.navCtrl.push(LoginPage).then(()=>{
      /*this.navCtrl.setRoot(LoginPage);*/
      this.presentLoading();
      this.navCtrl.parent.parent.setRoot(LoginPage);
    });
  }

  showAlert(str: string){
    let alert = this.alertCtrl.create({
      title: 'Iniciando app...',
      subTitle: str,
      buttons: ['OK']
    });
    alert.present();
  }

  openMenu() {
    console.log("Action Sheet");
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share with',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Twitter',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Whatsapp',
          icon: !this.platform.is('ios') ? 'logo-whatsapp' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

}
