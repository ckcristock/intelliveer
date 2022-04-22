import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
@Injectable({
	providedIn: 'root',
})
export class MappingService {
	constructor(private http: HttpClient) {}
	getPractices(bgId: string) {
		return this.http.get(
			`${CONFIG.backend.host}/bg-auth/api/v1/practice?bg=${bgId}`
		);
	}
	getLegalEntites(bgId: string) {
		return this.http.get(
			`${CONFIG.backend.host}/bg-auth/api/v1/legal-entity?bg=${bgId}`
		);
	}
	getMapping(bgId: string) {
		return this.http.get(
			`${CONFIG.backend.host}/bg-auth/api/v1/bg-mapping?bg=${bgId}`
		);
	}
	updateMapping(bgId: string, data: any) {
		return this.http.post(
			`${CONFIG.backend.host}/bg-auth/api/v1/bg-mapping?bg=${bgId}`,
			data
		);
	}
}
