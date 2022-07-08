import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  urlManageUser!: string;
  menuItems: any[] = [];

  constructor(private router: Router,
    private globalRoutes: GlobalRoutesService,
    private userServ: UserService) {
      this.urlManageUser = this.globalRoutes.getSettingsUserManageUrl();
      this.menuItems = this.globalRoutes.getSettingsUserManageRoutes()[1].child;
     }

  ngOnInit(): void {
  }

}
