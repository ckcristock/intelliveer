import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
	providedIn: 'root'
})
export class PracticeService {
	constructor(private http: HttpClient) {}
	getPractices(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/practice`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	getPractice(bgId: string, prId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/practice/${prId}`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	createPractice(bgId: string, data: any) {
		return this.http.post(`${CONFIG.backend.host}/bg/practice`, data, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	updatePractice(bgId: string, prId: string, data: any) {
		return this.http.put(
			`${CONFIG.backend.host}/bg/practice/${prId}`,
			data,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}
	deletePractice(bgId: string, prId: string) {
		return this.http.delete(`${CONFIG.backend.host}/bg/practice/${prId}`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
}
