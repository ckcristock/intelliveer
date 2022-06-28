import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss'],
})
export class AddProviderComponent implements OnInit, OnDestroy {
  // bgDropdownSubscription: Subscription;
  // selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private bgDropdownService: BusinessGroupDropdownService,
    // private providerLocation: PracticeService
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
      // this.providerLocation
      //   .createPractice(this.selectedBusinessGroup.bgId, data)
      //   .subscribe({
      //     next: (res) => {
      //       this.router.navigate(['/dashboard/settings/onboarding/provider']);
      //     },
      //     error: () => {},
      //   });
    // }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/patient/patient-user/provider']);
  }
}
