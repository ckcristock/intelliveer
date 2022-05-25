import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-family-member',
  templateUrl: './add-family-member.component.html',
  styleUrls: ['./add-family-member.component.scss'],
})
export class AddFamilyMemberComponent implements OnInit, OnDestroy {
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
      //       this.router.navigate(['/dashboard/onboarding/referer']);
      //     },
      //     error: () => {},
      //   });
    // }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/patient/patient-user/family_members']);
  }
}
