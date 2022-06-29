import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  menuItems:any [] = [
    {title: "Manage User", url: '/dashboard/settings/user-management/manage-user'},
    {title: "User policy", url: '/dashboard/settings/user-management/user-policy'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
