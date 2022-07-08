import { Component, OnInit } from '@angular/core';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  urlSettings!: string;
  menuItems:any [] = [
    {title: "Manage Role Templates", url: '/dashboard/settings/role-management/manage-role-template'},
    {title: "Manage Role", url: '/dashboard/settings/role-management/manage-role'},
  ];


  constructor(private routes: GlobalRoutesService,) { 
    this.urlSettings = this.routes.getSettingsUrl();
  }

  ngOnInit(): void {
  }

}
