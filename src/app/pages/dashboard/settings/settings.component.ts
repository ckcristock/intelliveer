import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  boxes: any[] = [
    { name: "Organization Onboarding" },
    { name: "Role Management" },
    { name: "User Management" },
    { name: "Practice Onboarding" },

  ];

}
