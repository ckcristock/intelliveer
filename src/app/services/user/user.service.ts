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

  getUser(): Observable<any[]>{
    return this.user$;
  }

  deleteManageUser(id: number) {
    let manageUserDeleted = this.users.filter((x) => {
      return x.id != id;
    })
    this.users = manageUserDeleted;
    this.users$.next(this.users);
  }
}
