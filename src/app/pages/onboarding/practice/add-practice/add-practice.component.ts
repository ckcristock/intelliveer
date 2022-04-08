import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '@config/index';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-practice',
  templateUrl: './add-practice.component.html',
  styleUrls: ['./add-practice.component.scss'],
})
export class AddPracticeComponent implements OnInit, OnDestroy {
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
          `${CONFIG.backend.host}/bg-auth/api/v1/practice?bg=${this.selectedBusinessGroup.bgId}`,
          data
        )
        .subscribe({
          next: (data) => {
            this.router.navigate(['/dashboard/onboarding/practice']);
          },
          error: () => {},
        });
    }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/onboarding/practice']);
  }
}
