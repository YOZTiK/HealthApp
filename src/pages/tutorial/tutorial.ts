import { Component } from '@angular/core';

import { TabsPage } from "../tabs/tabs";
import {IonicPage, NavController, NavParams} from "ionic-angular";
/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  slides = [
    {
      title: "Welcome to Toola!",
      description: "<b>Toola</b>, la aplicación que cuida de ti.",
      image: "../assets/imgs/logos/toola-logo-b.png",
    },
    {
      title: "La alimentación",
      description: "Los <b>desórdenes</b> del cuerpo ocurren debido a cargas pesadas de sustancias extrañas que necesitan ser metabolizadas.",
      image: "../assets/imgs/tutorial/child.jpg",
    },
    {
      title: "Tu estado de salud",
      description: "Los <b>filtros</b> de tu cuerpo se cuerpo se congestionan llevando más allá de sus capacidades naturales de desintoxicación.",
      image: "../assets/imgs/tutorial/health.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  endTutorial(){
    this.navCtrl.push(TabsPage).then(()=>{
      this.navCtrl.setRoot(TabsPage);
      /*this.presentLoading();*/
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
