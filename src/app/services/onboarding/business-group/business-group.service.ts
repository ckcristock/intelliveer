import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessGroupService {
  constructor(private http: HttpClient,
    private authService: AuthService) {}
  getBusinessGroups() {
    return this.http.get(`${CONFIG.backend.host}/bg/business-group`,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
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
