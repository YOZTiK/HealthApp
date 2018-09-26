import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ChallengeDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-challenge-description',
  templateUrl: 'challenge-description.html',
})
export class ChallengeDescriptionPage {

  challenge: any;

  constructor( public navParams: NavParams, public viewCtrl: ViewController ) {
    this.challenge = this.navParams.data;
    //console.log('title Child: '+ this.challenge.title);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallengeDescriptionPage');
  }

}
