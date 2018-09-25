import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsConfPage } from './settings-conf';

@NgModule({
  declarations: [
    SettingsConfPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsConfPage),
  ],
})
export class SettingsConfPageModule {}
