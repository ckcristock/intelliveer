import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from "@services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private manageUsersCounter: number = 0;
  private users: any[] = [];
  private users$: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);

  private user: any[] = [];
  private user$: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);

  userUrl: string = `${CONFIG.backend.host}/user/user`;
  roleUrl: string = `${CONFIG.backend.host}/role/role`;

  constructor(private authService: AuthService,
    private http: HttpClient,) { }

  pushManageUser(user: any) {
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId(),
    });
    return this.http.post(this.userUrl, user, { headers });
  }

  getRoles() {
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId(),
    });
    return this.http.get(this.roleUrl, { headers }
    );
  }

  getRoleById(id: any) {
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId(),
    });
    return this.http.get(`${this.roleUrl}/id`, { headers }
    );
  }

  refreshUsers(){
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId()
    });
    this.http.get<any>(this.userUrl, { headers }).subscribe((resp:any)=>{
      this.users = resp;
      this.users$.next(this.users);
    });
  }

  getUsers(): Observable<any[]>{
    return this.users$;
  }

  refreshUserById(userId: number){
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId()
    });
    this.http.get<any>(`${this.userUrl}/${userId}`, { headers }).subscribe((resp:any)=>{
      this.user = resp;
      this.user$.next(this.user);
    });
  }

  getSomething(userId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'X-ORG-ID': this.authService.getOrgId()
      });
      this.http.get<any>(`${this.userUrl}/${userId}`, { headers }).subscribe({
          next: (data) => resolve(data),
          error: (err) => reject(err),
        });
    });
  }

  async gotoPersonalInfo(userH: any){
    //this.userServ.refreshUserById(user._id);
    this.user = userH;
  }

  getUser(){
    return this.user;
  }

  updateUserProfile(userProf:any, userId: number){
    console.log("////////");
    console.log("update funct services, profile:", userProf);
    console.log("userId", userId);
    
    console.log("////////");
    
    
    const headers = new HttpHeaders({
      'X-ORG-ID': this.authService.getOrgId()
    });
    return this.http.put<any>(`${this.userUrl}/update-user-profile/${userId}`,  userProf , { headers });
  }

  deleteManageUser(id: number) {
    let manageUserDeleted = this.users.filter((x) => {
      return x.id != id;
    })
    this.users = manageUserDeleted;
    this.users$.next(this.users);
  }
}
