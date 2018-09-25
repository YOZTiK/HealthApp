import { Component } from "@angular/core";
import {
  List,
  ModalController,
  NavController,
  Platform,
  NavParams,
  ViewController
} from "ionic-angular";

import { ChallengeDescriptionPage } from "../../pages/modals/challenge-description/challenge-description";

@Component({
  selector: "page-home",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  presentContactModal(title) {
    console.log("title parent: " + title);
    let descriptionModal = this.modalCtrl.create(ChallengeDescriptionPage, {
      title: title
    });
    descriptionModal.present();
  }
}
