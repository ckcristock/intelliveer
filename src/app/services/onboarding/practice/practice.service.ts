import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';

@Injectable({
  providedIn: 'root',
})
export class PracticeService {
  constructor(private http: HttpClient) {}
  getPractices(bgId: string) {
    return this.http.get(
      `${CONFIG.backend.host}/bg-auth/api/v1/practice?bg=${bgId}`
    );
  }
  getPractice(bgId: string, prId: string) {
    return this.http.get(
      `${CONFIG.backend.host}/bg-auth/api/v1/practice/${prId}?bg=${bgId}`
    );
  }
  createPractice(bgId: string, data: any) {
    return this.http.post(
      `${CONFIG.backend.host}/bg-auth/api/v1/practice?bg=${bgId}`,
      data
    );
  }
  updatePractice(bgId: string, prId: string, data: any) {
    return this.http.patch(
      `${CONFIG.backend.host}/bg-auth/api/v1/practice/${prId}?bg=${bgId}`,
      data
    );
  }
  deletePractice(bgId: string, prId: string) {
    return this.http.delete(
      `${CONFIG.backend.host}/bg-auth/api/v1/practice/${prId}?bg=${bgId}`
    );
  }
}
