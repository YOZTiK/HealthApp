import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { SignUpPage } from "../sign-up/sign-up";
import { TutorialPage } from "../tutorial/tutorial";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  private username: string;
  private password: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fbSignIn(){
    this.showAlert('Facebook login page here');
    this.navCtrl.push(TutorialPage).then(()=>{
      this.navCtrl.setRoot(TutorialPage);
      /*this.presentLoading();*/
    });
  }

  googleSignIn(){
    this.showAlert('Google login page here');
    this.navCtrl.push(TutorialPage).then(()=>{
      this.navCtrl.setRoot(TutorialPage);
      this.presentLoading();
    });
  }

  login(){
    if(this.username==='Hippo'&&this.password==='password'){
      this.navCtrl.push(TutorialPage).then(()=>{
        this.navCtrl.setRoot(TutorialPage);
        this.presentLoading();
      });
    }else
      this.navCtrl.push(SignUpPage, {
        username: this.username
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

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

}
