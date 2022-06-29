import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-health-history',
  templateUrl: './add-health-history.component.html',
  styleUrls: ['./add-health-history.component.scss'],
})
export class AddHealthHistoryComponent implements OnInit, OnDestroy {
  // bgDropdownSubscription: Subscription;
  // selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private bgDropdownService: BusinessGroupDropdownService,
    // private refererLocation: PracticeService
  ) {
    // this.bgDropdownSubscription = this.bgDropdownService
    //   .businessGroup()
    //   .subscribe((bg) => {
    //     if (bg) {
    //       this.selectedBusinessGroup = bg;
    //     }
    //   });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    // this.bgDropdownSubscription.unsubscribe();
  }
  create(data: any) {
    console.log(data);
    // if (this.selectedBusinessGroup) {
      // this.refererLocation
      //   .createPractice(this.selectedBusinessGroup.bgId, data)
      //   .subscribe({
      //     next: (res) => {
      //       this.router.navigate(['/dashboard/settings/onboarding/referer']);
      //     },
      //     error: () => {},
      //   });
    // }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/patient/consultation/health-history']);
  }
}
