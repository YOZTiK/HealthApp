import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the CouponsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { CouponDetailsPage } from '../../modals/coupon-details/coupon-details';

@IonicPage()
@Component({
  selector: 'page-coupons',
  templateUrl: 'coupons.html',
})
export class CouponsPage {

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
    this.items = [
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false}
    ];
  }

  openCouponsDetails(){
    console.log('Open Coupon details modal');

    let modal = this.modalCtrl.create(CouponDetailsPage);
    modal.present();
    modal.onDidDismiss(data => {

      console.log(data);
    });
  }

  expandItem(item){

    this.items.map((listItem) => {

      if(item == listItem){
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
