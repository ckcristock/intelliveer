import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
  providedIn: 'root',
})
export class LegalEntityService {
  constructor(private http: HttpClient) {}
  getLegalEntites(bgId: string) {
    return this.http.get(
      `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity?bg=${bgId}`
    );
  }
  getLegalEntity(bgId: string, leId: string) {
    return this.http.get(
      `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity/${leId}?bg=${bgId}`
    );
  }
  createLegalEntity(bgId: string, data: any) {
    return this.http.post(
      `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity?bg=${bgId}`,
      data
    );
  }
  updateLegalEntity(bgId: string, leId: string, data: any) {
    return this.http.patch(
      `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity/${leId}?bg=${bgId}`,
      data
    );
  }
  deleteLegalEntity(bgId: string, leId: string) {
    return this.http.delete(
      `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity/${leId}?bg=${bgId}`
    );
  }
}
