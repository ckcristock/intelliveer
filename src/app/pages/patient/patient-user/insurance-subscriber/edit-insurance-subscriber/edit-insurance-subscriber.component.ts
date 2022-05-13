import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-insurance-subscriber',
  templateUrl: './edit-insurance-subscriber.component.html',
  styleUrls: ['./edit-insurance-subscriber.component.scss'],
})
export class EditInsuranceSubscriberComponent implements OnInit, OnDestroy {
  id: string | undefined;
  data: any;
  bgDropdownSubscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bgDropdownService: BusinessGroupDropdownService,
    private practiceLocation: PracticeService
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
        this.getPractice(params['id']);
      }
    });
  }
  ngOnDestroy(): void {
    this.bgDropdownService.disable(false);
    this.bgDropdownSubscription.unsubscribe();
  }
  getPractice(id: string) {
    if (this.selectedBusinessGroup && id) {
      this.practiceLocation
        .getPractice(this.selectedBusinessGroup.bgId, id)
        .subscribe({
          next: (res) => {
            this.data = res;
          },
          error: () => {},
        });
    }
  }
  update(data: any) {
    if (this.id && this.selectedBusinessGroup) {
      this.practiceLocation
        .updatePractice(this.selectedBusinessGroup.bgId, this.id, data)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/dashboard/patient/patient-user/insurance-subscriber']);
          },
          error: () => {},
        });
    }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/patient/patient-user/insurance-subscriber']);
  }
}
