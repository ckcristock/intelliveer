import { Component, OnInit } from '@angular/core';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";
import { UserService } from "@services/user/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersManage: any [] = [];
  addRoute: string = "";

  constructor(private router: Router,
    private globalRoutes: GlobalRoutesService,
    private userServ: UserService) { }

    ngOnInit(): void {
      console.log("Users Manage", this.usersManage);
      
      this.addRoute = this.globalRoutes.getSettingsUserManageRoutes()[0].child[0].url;
      this.userServ.getManageUser().subscribe(
        (resp: any) => {
          this.usersManage = resp;
          console.log("insidee", this.usersManage);
          
        }
      );
    }

  addUserManage()
  {
    //this.router.navigate(['/dashboard/settings/role-management/manage-role-template/add']);
    this.router.navigate([this.globalRoutes.getSettingsUserManageRoutes()[0].child[0].url]);
  }

  deleteUserManage(id:number){
    this.userServ.deleteManageUser(id);
  }

}
