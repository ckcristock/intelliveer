import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  menuItems:any [] = [
    {title: "Manage Role Templates", url: '/dashboard/settings/role-management/manage-role-template'},
    {title: "Manage Role", url: '/dashboard/settings/role-management/manage-role'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
