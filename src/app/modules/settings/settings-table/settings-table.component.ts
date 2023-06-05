import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-table',
  templateUrl: './settings-table.component.html',
  styleUrls: ['./settings-table.component.scss']
})
export class SettingsTableComponent {

  @Input() moduleData: any = undefined;


}
