import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
	providedIn: 'root'
})
export class DentistService {
	constructor(private http: HttpClient) {}

	save(Obj: any, bgId: any) {
		return this.http.post(
			`${CONFIG.backend.host}/bg/dentist`,
			Obj,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	getList(bgId: any) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/dentist?skip=0&limit=10`,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	getSingleData(bgId: any, userId: any) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/dentist/` + userId + ``,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	update(Obj: any, bgId: any) {
		return this.http.put(
			`${CONFIG.backend.host}/bg/dentist/`,
			Obj,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}
}
