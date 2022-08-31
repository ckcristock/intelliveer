import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
	providedIn: 'root'
})
export class LegalGuardianService {
	constructor(private http: HttpClient) {}

	saveLegalGuardian(Obj: any, bgId: any) {
		return this.http.post(`${CONFIG.backend.host}/bg/legal-guardian`, Obj, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getLegalGuardianList(bgId: any) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/legal-guardian?skip=0&limit=10`,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	getSingleLegalGuardianData(bgId: any, userId: any) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/legal-guardian/` + userId + ``,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	updateLegalGuardian(Obj: any, bgId: any) {
		return this.http.put(`${CONFIG.backend.host}/bg/legal-guardian/`, Obj, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
}