import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
@Injectable({
	providedIn: 'root'
})
export class MappingService {
	constructor(private http: HttpClient) {}
	getPractices(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/practice`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	getLegalEntites(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/legal-entity`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	getMapping(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/mapping`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	updateMapping(bgId: string, data: any,ID:any) {
		return this.http.put(`${CONFIG.backend.host}/bg/mapping/${ID}`, data, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	saveMapping(bgId: string, data: any) {
		return this.http.post(`${CONFIG.backend.host}/bg/mapping`, data, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
}
