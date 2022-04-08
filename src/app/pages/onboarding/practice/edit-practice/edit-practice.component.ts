import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG } from '@config/index';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-practice',
  templateUrl: './edit-practice.component.html',
  styleUrls: ['./edit-practice.component.scss'],
})
export class EditPracticeComponent implements OnInit, OnDestroy {
  id: string | undefined;
  data: any;
  bgDropdownSubscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private bgDropdownService: BusinessGroupDropdownService
  ) {
    this.bgDropdownSubscription = this.bgDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          this.selectedBusinessGroup = bg;
        }
      });
    this.bgDropdownService.disable(true);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getLOC(params['id']);
      }
    });
  }
  ngOnDestroy(): void {
    this.bgDropdownService.disable(false);
    this.bgDropdownSubscription.unsubscribe();
  }
  getLOC(id: string) {
    if (this.selectedBusinessGroup && id) {
      this.http
        .get(
          `${CONFIG.backend.host}/bg-auth/api/v1/practice/${id}?bg=${this.selectedBusinessGroup.bgId}`
        )
        .subscribe({
          next: (data) => {
            this.data = data;
          },
          error: () => {},
        });
    }
  }
  update(data: any) {
    if (this.id && this.selectedBusinessGroup) {
      this.http
        .patch(
          `${CONFIG.backend.host}/bg-auth/api/v1/practice/${this.id}?bg=${this.selectedBusinessGroup.bgId}`,
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
