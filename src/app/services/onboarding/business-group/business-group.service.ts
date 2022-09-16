import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BusinessGroupService {
	bgId: any;
	orgId: any;
	BusinessGroup: any;
	private BusinessGroup$: BehaviorSubject<any> = new BehaviorSubject<any>('');


	constructor(private http: HttpClient,
		private authService: AuthService,
		private cookieService: CookieService) {
		this.getOrgBgId();
	}
	getBusinessGroups() {
		if (this.bgId) {
			return this.http.get(
				`${CONFIG.backend.host}/bg/business-group/${this.bgId}`,
				{
					headers: {
						'X-ORG-ID': this.orgId
					}
				}
			);
		} else {
			return this.http.get(`${CONFIG.backend.host}/bg/business-group`, {
				headers: {
					'X-ORG-ID': 'intelliveer'
				}
			});
		}
	}
	getBusinessGroup(bgId: string, orgId?: any) {
		if (!orgId) {
			orgId = 'intelliveer';
		}

		return this.http.get(
			`${CONFIG.backend.host}/bg/business-group/${bgId}`,
			{
				headers: {
					'X-ORG-ID': orgId
				}
			}
		);
	}

	setBusinessGroup(data: any) {
		this.BusinessGroup = data;
		this.BusinessGroup$.next(this.BusinessGroup);
	}

	getBusinessGroupSet(): Observable<any>{
		return this.BusinessGroup$;
	}

	createBusinessGroup(data: any) {
		return this.http.post(
			`${CONFIG.backend.host}/bg/business-group`,
			data,
			{
				headers: {
					'X-ORG-ID': 'intelliveer'
				}
			}
		);
	}
	updateBusinessGroup(bgId: string, data: any) {
		return this.http.put(
			`${CONFIG.backend.host}/bg/business-group/${bgId}`,
			data,
			{
				headers: {
					'X-ORG-ID': 'intelliveer'
				}
			}
		);
	}
	deleteBusinessGroup(bgId: string) {
		return this.http.delete(
			`${CONFIG.backend.host}/bg/business-group/${bgId}`,
			{
				headers: {
					'X-ORG-ID': 'intelliveer'
				}
			}
		);
	}
	getPermissionByUserRole(orgId?: any) {
		if (!orgId) {
			orgId = 'intelliveer';
		}
		return this.http.get(
			`${CONFIG.backend.host}/user/user/user-roles/myroles`,
			{
				headers: {
					'X-ORG-ID': orgId
				}
			}
		);
	}
	getOrgBgId() {
		let user: any = this.cookieService.get('user');
		let orgId = this.authService.getOrgId();
		user = JSON.parse(user);
		if (user) {
			if (user?.__ISSU__) {
				this.orgId = 'intelliveer';
			} else if (user?._id) {
				this.orgId = 'intelliveer';
				this.bgId = user._id
			} else {
				this.orgId = orgId;
				this.bgId = orgId;
			}
		}
	}
}
