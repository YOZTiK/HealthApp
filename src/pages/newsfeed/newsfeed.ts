import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { HTTP } from '@ionic-native/http';

//Components

@Component({
  selector: "page-contact",
  templateUrl: "newsfeed.html"
})

export class NewsfeedPage {

  constructor( public navCtrl: NavController, private http: HTTP, private toastCtrl: ToastController ) {

    this.show_error('Reading data from https://randomuser.me/api/ ');

    this.http.get('https://randomuser.me/api/', {dataType: 'json'}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

        this.show_error('Status: ' + data.status);
        this.show_error('Data: ' + data.data); // data received by server
        this.show_error('headers: ' + data.headers);

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

  show_error(message:string){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500
    });
    toast.present();
  }

}
