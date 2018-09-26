import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { NewsfeedPage } from '../newsfeed/newsfeed';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = NewsfeedPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
