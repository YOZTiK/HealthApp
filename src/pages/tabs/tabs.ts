import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { DetailsPage } from '../details/details';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = DetailsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
