import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '@src/app/config';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@src/app/services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit, OnDestroy {
  bgDropdownSubscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private http: HttpClient,
    private router: Router,
    private bgDropdownService: BusinessGroupDropdownService
  ) {
    this.bgDropdownSubscription = this.bgDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          this.selectedBusinessGroup = bg;
        }
      });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.bgDropdownSubscription.unsubscribe();
  }
  create(data: any) {
    if (this.selectedBusinessGroup) {
      this.http
        .post(
          `${CONFIG.backend.host}/bg-auth/api/v1/location?bg=${this.selectedBusinessGroup.bgId}`,
          data
        )
        .subscribe({
          next: (data) => {
            this.router.navigate(['/dashboard/onboarding/location']);
          },
          error: () => {},
        });
    }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/onboarding/location']);
  }
}
