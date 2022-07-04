import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class BusinessGroupService {
	constructor(private http: HttpClient, private authService: AuthService) {}
	getBusinessGroups() {
		return this.http.get(`${CONFIG.backend.host}/bg/business-group`, {
			headers: {
				'X-ORG-ID': 'intelliveer'
			}
		});
	}
	getBusinessGroup(bgId: string) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/business-group/${bgId}`,
			{
				headers: {
					'X-ORG-ID': 'intelliveer'
				}
			}
		);
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
}
