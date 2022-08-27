import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
  providedIn: 'root'
})
export class PaymentPartyService {

  constructor(private http: HttpClient) {}

	save(Obj: any, bgId: any) {
		return this.http.post(`${CONFIG.backend.host}/bg/payment-party`, Obj, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getList(bgId: any) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/payment-party?skip=0&limit=10`,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	getSingleData(bgId: any, userId: any) {
		return this.http.get(
			`${CONFIG.backend.host}/bg/payment-party/` + userId + ``,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}

	update(Obj: any, bgId: any) {
		return this.http.put(`${CONFIG.backend.host}/bg/payment-party/`, Obj, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
}
