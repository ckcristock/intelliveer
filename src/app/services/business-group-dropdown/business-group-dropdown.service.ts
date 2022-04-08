import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@src/app/config';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface SelectedBusinessGroup {
  bgId: string;
  disabled: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BusinessGroupDropdownService {
  private selectedBG: SelectedBusinessGroup | undefined;
  private disabled: boolean = false;

  private businessGroups = new BehaviorSubject<any>([]);
  private selectedBusinessGroup = new BehaviorSubject<
    SelectedBusinessGroup | undefined
  >(undefined);
  constructor(private http: HttpClient) {
    this._getBusinessGroups();
  }
  businessGroup(): Observable<SelectedBusinessGroup | undefined> {
    return this.selectedBusinessGroup.asObservable();
  }
  getBusinessGroups(): Observable<any> {
    return this.businessGroups.asObservable();
  }
  setSelectedBusinessGroup(bg: string) {
    if (bg) {
      this.selectedBG = {
        bgId: bg,
        disabled: this.disabled,
      };
      this.selectedBusinessGroup.next(this.selectedBG);
    }
  }
  reload(): void {
    this._getBusinessGroups();
  }
  disable(val: boolean): void {
    if (this.selectedBG) {
      this.disabled = val;
      this.selectedBusinessGroup.next({
        bgId: this.selectedBG.bgId,
        disabled: val,
      });
    }
  }
  private _getBusinessGroups() {
    this.http
      .get(`${CONFIG.backend.host}/auth/api/v1/business-group`)
      .subscribe({
        next: (data: any) => {
          if (data && data.length > 0) {
            this.selectedBG = {
              bgId: data[0]?._id,
              disabled: this.disabled,
            };
            this.selectedBusinessGroup.next(this.selectedBG);
            this.businessGroups.next(data);
          }
        },
        error: () => {},
        complete: () => {},
      });
  }
}
