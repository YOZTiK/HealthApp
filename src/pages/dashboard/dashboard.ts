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

  public dataChallengeList = [];

  public dataList = [
    {
      img: 'https://goo.gl/X1uwk9',
      title: 'Alcachofa',
      type: 'challenge',
      text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
        'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip.',
      title2: 'Beneficios',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      title3: 'Duración',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1521727747887-11e4fb3e523c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3fa84affac572e661b95c6cfe0c6bf2&auto=format&fit=crop&w=1352&q=80',
      title: 'Baños',
      type: 'challenge',
      text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
        'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip.',
      title2: 'Beneficios',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      title3: 'Duración',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88f76505743ef2ed04101148ba74269e&auto=format&fit=crop&w=2850&q=80);',
      title: 'Bienestar',
      type: 'challenge',
      text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
        'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip.',
      title2: 'Beneficios',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      title3: 'Duración',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1534322989717-f57e38ba9120?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bacabe8d1c88bfa90b369632e9caea0&auto=format&fit=crop&w=2095&q=80',
      title: 'Dieta',
      type: 'challenge',
      text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
        'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip.',
      title2: 'Beneficios',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      title3: 'Duración',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    }
  ];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public platform: Platform
  ) {
    for(let challenge of this.dataList){
      if(!platform.is('mobile'))
        challenge.img = challenge.img;
        this.dataChallengeList.push(challenge);
    }
  }

  presentContactModal( challenge ) {
    console.log("title parent: " + challenge.title);
    let descriptionModal = this.modalCtrl.create( ChallengeDescriptionPage, challenge );
    descriptionModal.present();
  }

  doRefresh(event){
    this.dataList = [
      {
        img: 'https://goo.gl/X1uwk9',
        title: 'Alcachofa',
        type: 'challenge',
        text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Beneficios',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      },
      {
        img: 'https://images.unsplash.com/photo-1521727747887-11e4fb3e523c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3fa84affac572e661b95c6cfe0c6bf2&auto=format&fit=crop&w=1352&q=80',
        title: 'Baños',
        type: 'challenge',
        text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Beneficios',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      },
      {
        img: 'image-div" style="background-image: url(https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88f76505743ef2ed04101148ba74269e&auto=format&fit=crop&w=2850&q=80);',
        title: 'Bienestar',
        type: 'challenge',
        text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Beneficios',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      },
      {
        img: 'https://images.unsplash.com/photo-1534322989717-f57e38ba9120?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bacabe8d1c88bfa90b369632e9caea0&auto=format&fit=crop&w=2095&q=80',
        title: 'Dieta',
        type: 'challenge',
        text: 'Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Beneficios',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      }
    ];
    this.dataChallengeList = [];
    for(let user of this.dataList){
      if(!this.platform.is('mobile'))
        user.img = "."+user.img;

      this.dataChallengeList.push(user);

    }
    event.complete();
  }

}
