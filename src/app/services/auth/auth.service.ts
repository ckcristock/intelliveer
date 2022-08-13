import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { CONFIG } from '@config/index';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private cookieService: CookieService,
		private http: HttpClient,
		private injector: Injector
	) {}
	isLoggedIn() {
		const session = this.cookieService.get('isLoggedIn');
		if (session) {
			return true;
		} else {
			return false;
		}
	}
	getLoggedInUser() {
		const user = this.cookieService.get('user');
		if (user) {
			return JSON.parse(user);
		} else {
			return null;
		}
	}
	getOrgId() {
		return this.cookieService.get('orgId');
	}
	getSelectedBusinessGroup() {
		const bg = localStorage.getItem('selected_business_group');
		return bg?.toString() || 'intelliveer';
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
