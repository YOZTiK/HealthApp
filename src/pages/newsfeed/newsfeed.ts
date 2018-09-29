import { Component } from "@angular/core";
import {NavController, Platform, ToastController, Item, ItemSliding } from "ionic-angular";
import { HTTP } from '@ionic-native/http';

//Components

@Component({
  selector: "page-contact",
  templateUrl: "newsfeed.html"
})

export class NewsfeedPage {
  public aux;
  public aux2;

  activeItemSliding: ItemSliding = null;

  constructor( public navCtrl: NavController, private http: HTTP, private toastCtrl: ToastController, private platform:Platform ) {
    this.show_error('Reading data from https://randomuser.me/api/ ');

    this.http.get('https://randomuser.me/api/?results=10&inc=gender,name,email,phone,picture', {dataType: 'json'}, {})
      .then(data => {
        console.log('Status: ' + data.status);
        this.aux = JSON.parse(data.data);
        this.aux2 = this.aux.results;
        console.log('Data: ' + JSON.stringify(this.aux.results)); // data received by server
        console.log('email: ' + this.aux.results[0].email);
        console.log('headers: ' + data.headers);


      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

        this.show_error('Status: ' + error.status);
        this.show_error('Data: ' + error.data); // data received by server
        this.show_error('headers: ' + error.headers);

      });
  }

  openOption(itemSlide: ItemSliding, item: Item) {
    console.log('opening item slide..');

    if(this.activeItemSliding!==null) //use this if only one active sliding item allowed
      this.closeOption();

    this.activeItemSliding = itemSlide;

    let swipeAmount = 194; //set your required swipe amount
    itemSlide.startSliding(swipeAmount);
    itemSlide.moveSliding(swipeAmount);

    itemSlide.setElementClass('active-options-right', true);
    itemSlide.setElementClass('active-swipe-right', true);

    item.setElementStyle('transition', null);
    item.setElementStyle('transform', 'translate3d(-'+swipeAmount+'px, 0px, 0px)');
  }

  closeOption() {
    console.log('closing item slide..');

    if(this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = null;
    }
  }

  doRefresh(event) {

    this.http.get('https://randomuser.me/api/?results=10&inc=gender,name,email,phone,picture', {dataType: 'json'}, {})
      .then(data => {
        console.log('Status: ' + data.status);
        this.aux = JSON.parse(data.data);
        this.aux2 = this.aux.results;
        console.log('Data: ' + JSON.stringify(this.aux.results)); // data received by server
        console.log('email: ' + this.aux.results[0].email);
        console.log('headers: ' + data.headers);
      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

        this.show_error('Status: ' + error.status);
        this.show_error('Data: ' + error.data); // data received by server
        this.show_error('headers: ' + error.headers);

      });
    event.complete();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.aux2.push( this.aux2.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  show_error(message:string){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500
    });
    toast.present();
  }

}
