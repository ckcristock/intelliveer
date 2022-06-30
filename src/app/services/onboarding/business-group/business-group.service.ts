import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
  providedIn: 'root',
})
export class BusinessGroupService {
  constructor(private http: HttpClient) {}
  getBusinessGroups() {
    return this.http.get(`${CONFIG.backend.host}/bg/business-group`);
  }
  getBusinessGroup(bgId: string) {
    return this.http.get(
      `${CONFIG.backend.host}/bg/business-group/${bgId}`
    );
  }
  createBusinessGroup(data: any) {
    return this.http.post(
      `${CONFIG.backend.host}/bg/business-group`,
      data
    );
  }
  updateBusinessGroup(bgId: string, data: any) {
    return this.http.patch(
      `${CONFIG.backend.host}/bg/business-group/${bgId}`,
      data
    );
  }
  deleteBusinessGroup(bgId: string) {
    return this.http.delete(
      `${CONFIG.backend.host}/bg/business-group/${bgId}`
    );
  }
}
