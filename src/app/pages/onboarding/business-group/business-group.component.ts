import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '@src/app/config';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business-group',
  templateUrl: './business-group.component.html',
  styleUrls: ['./business-group.component.scss'],
})
export class BusinessGroupComponent implements OnInit {
  loading: boolean = true;
  data: any;
  checkedItems: any = [];
  checkAllState = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private businessGroupDropdownService: BusinessGroupDropdownService
  ) {}
  ngOnDestroy(): void {}
  ngOnInit() {
    this.fetchBgList();
  }
  fetchBgList() {
    this.http
      .get(`${CONFIG.backend.host}/auth/api/v1/business-group`)
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        error: () => {},
      });
  }
  deleteBG(id: string) {
    if (id) {
      this.http
        .delete(`${CONFIG.backend.host}/auth/api/v1/business-group/${id}`)
        .subscribe({
          next: (data) => {
            this.businessGroupDropdownService.reload();
            this.fetchBgList();
          },
          error: () => {},
        });
    }
  }
  navigateTo(bg: string, module: string) {
    this.businessGroupDropdownService.setSelectedBusinessGroup(bg);
    this.router.navigate([`dashboard/onboarding/${module}`]);
  }
}
