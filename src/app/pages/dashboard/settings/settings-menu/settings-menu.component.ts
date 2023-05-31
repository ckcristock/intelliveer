import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {
  boxes: any[] = [
    { name: "Organization Onboarding" },
    { name: "Role Management" },
    { name: "User Management" },
    { name: "Practice Onboarding" },

  ];

}
