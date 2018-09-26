import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsfeedDetailsPage } from './newsfeed-details';

@NgModule({
  declarations: [
    NewsfeedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsfeedDetailsPage),
  ],
})
export class NewsfeedDetailsPageModule {}
