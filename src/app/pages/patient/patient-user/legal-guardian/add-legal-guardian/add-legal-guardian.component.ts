import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';

@Component({
  selector: 'app-add-legal-guardian',
  templateUrl: './add-legal-guardian.component.html',
  styleUrls: ['./add-legal-guardian.component.scss']
})
export class AddLegalGuardianComponent implements OnInit {

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
    this.router.navigate(['/dashboard/patient/patient-user/legal-guardian']);
  }

}
