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

  users: any[] = [];
  roles: any[] = [];
  addRoute: string = "";
  popContent: string = "";
  popContentArray: any[] = [];
  popContentCounter: number = 0;

  constructor(private router: Router,
    private globalRoutes: GlobalRoutesService,
    private userServ: UserService) { }

  ngOnInit(): void {
    this.addRoute = this.globalRoutes.getSettingsUserManageRoutes()[0].child[0].url;
    this.userServ.refreshUsers();
    this.userServ.getUsers().subscribe(
      (resp: any) => {
        this.users = resp;

        this.userServ.getRoles().subscribe(
          (resp: any) => {
            this.roles = resp;
            for (let i = 0; i < this.users.length; i++) {
              for (let j = 0; j < this.roles.length; j++) {
                for (let y = 0; y < this.users[i]['roles'].length; y++) {
                  if (this.users[i]['roles'][y] == this.roles[j]._id) {
                    this.users[i]['roles'][y] = this.roles[j];
                  }
                }
              }
            }
          }
        );
      }
    );
  }

  addUser() {
    //this.router.navigate(['/dashboard/settings/role-management/manage-role-template/add']);
    this.router.navigate([this.globalRoutes.getSettingsUserManageRoutes()[0].child[0].url]);
  }

  deleteUser(id: number) {
    this.userServ.deleteManageUser(id);
  }

  usersPopUp(roles: any, index: any) {
    if (this.popContentArray[index] == null) {
      this.popContentCounter++;
      roles.forEach((element: any) => {
        if (this.popContentCounter == 1) {
          this.popContentCounter++;
          this.popContent = `${element.name}`;

        } else {
          this.popContent = `${this.popContent}, ${element.name}`;
        }
        this.popContentArray[index]=this.popContent;

      });
      this.popContent="";
      this.popContentCounter=0;
    }
  }

  async gotoPersonalInfo(user: any) {
    const data = await this.userServ.getUserByIdAPI(user._id);
    const data2 = await this.userServ.setUser(data);

    //this.router.navigate(['/dashboard/settings/user-management/manage-user/user-personal-info']);
    this.router.navigate([this.globalRoutes.getSettingsUserManageRoutes()[0].child[1].url]);

  }

}
