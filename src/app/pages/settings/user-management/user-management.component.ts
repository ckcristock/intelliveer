import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  onManageUSer: boolean = true;
  urlSettings!: string;
  menuItems: any[] = [
    { title: "Manage User", url: '/dashboard/settings/user-management/manage-user' },
  ];

  menuItemsUsers: any[] = [
    { title: "Presonal Information", url: '/dashboard/settings/user-management/manage-user/user-personal-info' },
    { title: "Role Assignment & User Policy", url: '/dashboard/settings/user-management/user-policy' },
    { title: "Provider", url: '/dashboard/settings/user-management/provider' },
    { title: "Document", url: '/dashboard/settings/user-management/document' },
  ];

  constructor(
    public router: Router,
    private routes: GlobalRoutesService,
  ) {
    this.urlSettings = this.routes.getSettingsUrl();
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.url == "/dashboard/settings/user-management/manage-user") {
        this.onManageUSer = true;
      } else {
        this.onManageUSer = false;
      }
    });
  }

  ngOnInit(): void {

    
  }

}
