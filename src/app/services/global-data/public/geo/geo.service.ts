import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
	providedIn: 'root'
})
export class GeoService {
	constructor(private http: HttpClient) {}
	getCountries() {
		return this.http.get(
			`${CONFIG.backend.host}/auth/global-data/countries`
		);
	}
	getStates(countryId: string) {
		return this.http.get(
			`${CONFIG.backend.host}/auth/global-data/states/${countryId}`
		);
	}
	getCities(stateId: string) {
		return this.http.get(
			`${CONFIG.backend.host}/auth/global-data/cities/${stateId}`
		);
	}
}
