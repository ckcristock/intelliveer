import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '@services/auth/auth.service';

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

	constructor(private authService: AuthService, private http: HttpClient) {}

	getUserList(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/user/user`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

  saveUsers(bgId: string, userObj: any)
  {
    return this.http.post(`${CONFIG.backend.host}/user/user`, userObj, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
  }

	pushManageUser(user: any) {
		const headers = new HttpHeaders({
			'X-ORG-ID': this.authService.getOrgId()
		});
		return this.http.post(this.userUrl, user, { headers });
	}

	getRoles(bgId: string) {
		const headers = new HttpHeaders({
			'X-ORG-ID': bgId
		});
		return this.http.get(`${CONFIG.backend.host}/role/role`, { headers });
	}

	getRoleById(id: any) {
		const headers = new HttpHeaders({
			'X-ORG-ID': this.authService.getOrgId()
		});
		return this.http.get(`${this.roleUrl}/id`, { headers });
	}

	refreshUsers() {
		const headers = new HttpHeaders({
			'X-ORG-ID': this.authService.getOrgId()
		});
		this.http.get<any>(this.userUrl, { headers }).subscribe((resp: any) => {
			this.users = resp;
			this.users$.next(this.users);
		});
	}

	getUsers(): Observable<any[]> {
		return this.users$;
	}

	refreshUserById(userId: number) {
		const headers = new HttpHeaders({
			'X-ORG-ID': this.authService.getOrgId()
		});
		this.http
			.get<any>(`${this.userUrl}/${userId}`, { headers })
			.subscribe((resp: any) => {
				this.user = resp;
				this.user$.next(this.user);
			});
	}

	getUserByIdAPI(userId: number): Promise<any> {
		return new Promise((resolve, reject) => {
			const headers = new HttpHeaders({
				'X-ORG-ID': this.authService.getOrgId()
			});
			this.http
				.get<any>(`${this.userUrl}/${userId}`, { headers })
				.subscribe({
					next: (data) => resolve(data),
					error: (err) => reject(err)
				});
		});
	}

	async setUser(userH: any) {
		this.user = userH;
	}

	async getUser() {
		return this.user;
	}

	updateUserProfile(userProf: any, userId: number, bgId: string) {
		const headers = new HttpHeaders({
			'X-ORG-ID': bgId
		});
		return this.http.put<any>(
			`${this.userUrl}/update-user-profile/${userId}`,
			userProf,
			{ headers }
		);
	}

	getUserData(bgId: any, userId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/user/user/`+userId, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	updateUserRole(bgId: any, userId: any, roleList: any)
	{
		return this.http.put(`${CONFIG.backend.host}/user/user/update-user-role/`+userId, roleList, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getUserRoleData(bgId: any, roleId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/role/role/`+ roleId, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getRoleList(bgId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/role/role`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getLegelEntityList(bgId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/bg/legal-entity`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getLocationList(bgId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/bg/location`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getPracticeList(bgId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/bg/practice`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	saveUserPolicyList(bgId: any, userId: any, userPermissions: any)
	{
		return this.http.post(`${CONFIG.backend.host}/user/user/user-policy/`+ userId, userPermissions, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getUserPolicyList(bgId: any, userId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/user/user/user-policy/`+ userId, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	deleteManageUser(id: number) {
		let manageUserDeleted = this.users.filter((x) => {
			return x.id != id;
		});
		this.users = manageUserDeleted;
		this.users$.next(this.users);
	}

	/** User change status */
	userLoginStatus(userStatus:any,userId:any,bgId:any){
		let data = {
			loginEnabled: JSON.parse(userStatus)
		}
		return this.http.put(`${CONFIG.backend.host}/user/user/update-login-status/`+ userId, data, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
}
