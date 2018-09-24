import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChallengeDescriptionPage } from './challenge-description';

@NgModule({
  declarations: [
    ChallengeDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallengeDescriptionPage),
  ],
})
export class ChallengeDescriptionPageModule {}
