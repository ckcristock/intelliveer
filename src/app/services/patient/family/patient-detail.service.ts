import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class PatientDetailService {
	constructor(private http: HttpClient, public authService: AuthService) {}

	savePatient(Obj: any, bgId: any) {
    return this.http.post(`${CONFIG.backend.host}/bg/patient`, Obj, {
      headers: {
        'X-ORG-ID': bgId
      }
    });
	}

  getLegalEntitesList(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg//legal-entity`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}
  
  getLocationsList(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/location`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

  getPracticesList(bgId: string) {
		return this.http.get(`${CONFIG.backend.host}/bg/practice`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

  getMapping(bgId: any) {
		return this.http.get(`${CONFIG.backend.host}/bg/mapping`, {
			headers: {
				'X-ORG-ID': bgId
			}
		});
	}

	getPatientList(bgId: string)
	{
		return this.http.get(`${CONFIG.backend.host}/bg/patient?skip=0&limit=10`, {
			headers: {
			  'X-ORG-ID': bgId
			}
		  });
	}

	getSinglePatientData(bgId: any, userId: any)
	{
		return this.http.get(`${CONFIG.backend.host}/bg/patient/`+ userId, {
			headers: {
			  'X-ORG-ID': bgId
			}
		  });
	}
}
