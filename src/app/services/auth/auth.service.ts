import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService, private http: HttpClient) {}
  isLoggedIn() {
    const session = this.cookieService.get('isLoggedIn');
    if (session) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    return this.http.post(
      `${CONFIG.backend.host}/auth/api/v1/auth/usr/signout`,
      {
        signedOutFromAllDevices: true,
      }
    );
  }
}
