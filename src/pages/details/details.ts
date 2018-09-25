import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "details.html"
})
export class DetailsPage {
  constructor(public navCtrl: NavController) {}

  segmentChanged(event) {
    console.log(event);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailsPage");
  }
}
