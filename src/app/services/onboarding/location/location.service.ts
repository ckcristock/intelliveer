import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}
  getLocations(bgId: string) {
    return this.http.get(
      `${CONFIG.backend.host}/bg-auth/api/v1/location?bg=${bgId}`
    );
  }
  getLocation(bgId: string, locId: string) {
    return this.http.get(
      `${CONFIG.backend.host}/bg-auth/api/v1/location/${locId}?bg=${bgId}`
    );
  }
  createLocation(bgId: string, data: any) {
    return this.http.post(
      `${CONFIG.backend.host}/bg-auth/api/v1/location?bg=${bgId}`,
      data
    );
  }
  updateLocation(bgId: string, locId: string, data: any) {
    return this.http.patch(
      `${CONFIG.backend.host}/bg-auth/api/v1/location/${locId}?bg=${bgId}`,
      data
    );
  }
  deleteLocation(bgId: string, locId: string) {
    return this.http.delete(
      `${CONFIG.backend.host}/bg-auth/api/v1/location/${locId}?bg=${bgId}`
    );
  }
}
