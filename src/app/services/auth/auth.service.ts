import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private cookieService: CookieService,
		private http: HttpClient
	) {}
	isLoggedIn() {
		const session = this.cookieService.get('isLoggedIn');
		if (session) {
			return true;
		} else {
			return false;
		}
	}
	getOrgId() {
		return this.cookieService.get('orgId');
	}
	logout() {
		return this.http.post(
			`${CONFIG.backend.host}/auth/signout`,
			{
				signOutFromAllDevices: true
			},
			{
				headers: {
					'X-ORG-ID': this.getOrgId()
				}
			}
		);
	}
}
