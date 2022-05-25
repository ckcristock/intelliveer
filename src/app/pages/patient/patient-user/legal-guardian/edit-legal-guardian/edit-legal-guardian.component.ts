import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectedBusinessGroup, BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-legal-guardian',
  templateUrl: './edit-legal-guardian.component.html',
  styleUrls: ['./edit-legal-guardian.component.scss']
})
export class EditLegalGuardianComponent implements OnInit {

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
