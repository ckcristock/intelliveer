import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from "@services/auth/auth.service";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private manageUsersCounter: number = 0;
  private manageUsers: any [] = [];
  private manageUsers$: BehaviorSubject<any []> = new BehaviorSubject<any>([]);

  userUrl: string = `${CONFIG.backend.host}/user/user`;
  roleUrl: string = `${CONFIG.backend.host}/role/role`;

  constructor(private authService: AuthService,
    private http: HttpClient,
    private cookieService: CookieService,) { }

  pushManageUser(user: any){
    // console.log("serviceee", manageUser);
    
    // this.manageUsersCounter++;
    // manageUser.id=this.manageUsersCounter;
    // this.manageUsers.push(manageUser);
    // this.manageUsers$.next(this.manageUsers);

    console.log(this.authService.getOrgId());
    
    // const url = `${CONFIG.backend.host}/user/user`
    // console.log(url);

    // const headers = new HttpHeaders({
    //   'X-ORG-ID': this.authService.getOrgId(),
    //   'Authorization':
    //   `Bearer ${this.cookieService.get('token')}`
    // });
    // return this.http.get(url, { headers}
    // );
   
    console.log(this.userUrl);

    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId(),
      'Authorization':
      `Bearer ${this.cookieService.get('token')}`
    });
    return this.http.post(this.userUrl, user, {headers});
  }

  getRoles(){
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId(),
      'Authorization':
      `Bearer ${this.cookieService.get('token')}`
    });
    return this.http.get(this.roleUrl, { headers}
    );

  }

  getManageUser(){
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId()
    });
    return this.http.get(this.userUrl, { headers});
  }

  deleteManageUser(id: number){
    let manageUserDeleted = this.manageUsers.filter((x)=>{
      return x.id!=id;
    })
    this.manageUsers=manageUserDeleted;
    this.manageUsers$.next(this.manageUsers);
  }
}
