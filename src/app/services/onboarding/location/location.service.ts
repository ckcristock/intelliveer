import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
	providedIn: 'root'
})
export class LocationService {
	constructor(private http: HttpClient) {}
	getLocations(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/location`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	getLocation(bgId: string, locId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/location/${locId}`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	createLocation(bgId: string, data: any) {
		return this.http.post(`${CONFIG.backend.host}/bg/location`, data, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
	updateLocation(bgId: string, locId: string, data: any) {
		return this.http.put(
			`${CONFIG.backend.host}/bg/location/${locId}`,
			data,
			{
				headers: {
					'X-ORG-ID': bgId
				}
			}
		);
	}
	deleteLocation(bgId: string, locId: string) {
		return this.http.delete(`${CONFIG.backend.host}/bg/location/${locId}`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
}
