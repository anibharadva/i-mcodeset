import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-info-panels',
  templateUrl: './info-panels.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InfoPanelsComponent {
  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
    this.initPreviousSettings();
  }

  public sales = [{ name: 'sales', value: 0.81, extra: { format: 'percent' } }];
  public salesBgColor = { domain: ['#2F3E9E'] };

  public likes = [{ name: 'BBS', value: 10582 }];
  public likesBgColor = { domain: ['#D22E2E'] };

  public downloads = [{ name: 'Transport', value: 789 }];
  public downloadsBgColor = { domain: ['#378D3B'] };

  public profit = [{ name: 'profit', value: 52470, extra: { format: 'currency' } }];
  public profitBgColor = { domain: ['#0096A6'] };

  public messages = [{ name: 'Employees', value: 19 }];
  public messagesBgColor = { domain: ['#606060'] };

  public members = [{ name: 'Mortuary', value: 179 }];
  public membersBgColor = { domain: ['#F47B00'] };

  public previousShowMenuOption: boolean;
  public previousMenuOption: string;
  public previousMenuTypeOption: string;
  public settings: Settings;


  public infoLabelFormat(c): string {
    switch (c.data.name) {
      case 'sales':
        return `<i class="fa fa-shopping-cart mr-2"></i>${c.label}`;
      case 'BBS':
        return `<i class="fa fa-user mr-2"></i>${c.label}`;
      case 'Transport':
        return `<i class="fa  fa-automobile mr-2"></i>${c.label}`;
      case 'profit':
        return `<i class="fa fa-money mr-2"></i>${c.label}`;
      case 'Employees':
        return `<i class="fa fa-user-secret mr-2"></i>${c.label}`;
      case 'Mortuary':
        return `<i class="fa fa-bed mr-2"></i>${c.label}`;
      default:
        return c.label;
    }
  }

  public infoValueFormat(c): string {
    switch (c.data.extra ? c.data.extra.format : '') {
      case 'currency':
        return `\$${Math.round(c.value).toLocaleString()}`;
      case 'percent':
        return `${Math.round(c.value * 100)}%`;
      default:
        return c.value.toLocaleString();
    }
  }

  public onSelect(event) {
    console.log(event);
  }



  public ngDoCheck() {
    if (this.checkAppSettingsChanges()) {
      setTimeout(() => this.sales = [...this.sales] );
      setTimeout(() => this.likes = [...this.likes] );
      setTimeout(() => this.downloads = [...this.downloads] );
      setTimeout(() => this.profit = [...this.profit] );
      setTimeout(() => this.messages = [...this.messages] );
      setTimeout(() => this.members = [...this.members] );
      this.initPreviousSettings();
    }
  }

  public checkAppSettingsChanges() {
    if (this.previousShowMenuOption != this.settings.theme.showMenu ||
      this.previousMenuOption != this.settings.theme.menu ||
      this.previousMenuTypeOption != this.settings.theme.menuType) {
      return true;
    }
    return false;
  }

  public initPreviousSettings() {
    this.previousShowMenuOption = this.settings.theme.showMenu;
    this.previousMenuOption = this.settings.theme.menu;
    this.previousMenuTypeOption = this.settings.theme.menuType;
  }

}
