import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { UserService } from '@services/user/user.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  onManagUser: boolean = true;
  users: any[] = [];
  roles: any[] = [];
  addRoute: string = "";
  popContent: string = "";
  popContentArray: any[] = [];
  popContentCounter: number = 0;
  urlSettings!: string;
  menuItems: any[] = [
    { title: "", url: '' },
  ];

  constructor(private router: Router,
    private globalRoutes: GlobalRoutesService,
    private userServ: UserService) {
      this.urlSettings = this.globalRoutes.getSettingsUrl();
      this.menuItems.push(this.globalRoutes.getSettingsUserManageRoutes()[0]);
      console.log("menuitemss", this.menuItems);
      

      router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        if (event.url == this.globalRoutes.getSettingsUserManageRoutes()[0].child[0]) {
          this.onManagUser = false;
        } else {
          this.onManagUser = true;
        }
      });
     }

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
    localStorage.setItem("user", JSON.stringify(data));
    const data2 = await this.userServ.setUser(data);

    this.router.navigate(['/dashboard/settings/user-management/edit-user']);
    //this.router.navigate([this.globalRoutes.getSettingsUserManageRoutes()[0].child[1].url]);

  }

}
