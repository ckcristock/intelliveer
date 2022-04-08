import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '@src/app/config';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.scss'],
})
export class LegalEntityComponent implements OnInit, OnDestroy {
  data: any;
  businessGroupDropdownSupscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private http: HttpClient,
    private businessGroupDropdownService: BusinessGroupDropdownService
  ) {
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          this.selectedBusinessGroup = bg;
          this.fetchList();
        }
      });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.businessGroupDropdownSupscription.unsubscribe();
  }
  fetchList() {
    if (this.selectedBusinessGroup) {
      this.http
        .get(
          `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity?bg=${this.selectedBusinessGroup.bgId}`
        )
        .subscribe({
          next: (data) => {
            this.data = data;
          },
          error: () => {},
        });
    }
  }
  delete(id: string) {
    if (this.selectedBusinessGroup && id) {
      this.http
        .delete(
          `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity/${id}?bg=${this.selectedBusinessGroup.bgId}`
        )
        .subscribe({
          next: (data) => {
            this.fetchList();
          },
          error: () => {},
        });
    }
  }
}
