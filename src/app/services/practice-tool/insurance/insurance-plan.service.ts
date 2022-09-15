import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
  providedIn: 'root'
})
export class InsurancePlanService {

  constructor(private http: HttpClient) {}

	save(Obj: any, bgId: any) {
		return this.http.post(
			`${CONFIG.backend.host}/bg/insurance-plan`,
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
			`${CONFIG.backend.host}/bg/insurance-plan`,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	getSingleData(bgId: any, userId: any) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/insurance-plan/` + userId + ``,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	update(Obj: any, bgId: any) {
		return this.http.put(
			`${CONFIG.backend.host}/bg/insurance-plan/`,
			Obj,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	delete(bgId: any, userId: any) {
		return this.http.delete(
			`${CONFIG.backend.host}/bg/insurance-plan/` + userId + ``,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}
}
