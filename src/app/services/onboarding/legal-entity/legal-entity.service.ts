import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
	providedIn: 'root'
})
export class LegalEntityService {
	constructor(private http: HttpClient) {}
	getLegalEntites(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg//legal-entity`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	getLegalEntity(bgId: string, leId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/legal-entity/${leId}`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	createLegalEntity(bgId: string, data: any) {
		return this.http.post(`${CONFIG.backend.host}/bg/legal-entity`, data, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	updateLegalEntity(bgId: string, leId: string, data: any) {
		return this.http.put(
			`${CONFIG.backend.host}/bg/legal-entity/${leId}`,
			data,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}
	deleteLegalEntity(bgId: string, leId: string) {
		return this.http.delete(
			`${CONFIG.backend.host}/bg/legal-entity/${leId}`,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}
}
