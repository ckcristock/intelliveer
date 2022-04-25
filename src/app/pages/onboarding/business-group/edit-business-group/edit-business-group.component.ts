import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';

@Component({
  selector: 'app-edit-business-group',
  templateUrl: './edit-business-group.component.html',
  styleUrls: ['./edit-business-group.component.scss'],
})
export class EditBusinessGroupComponent implements OnInit {
  id: string | undefined;
  data: any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bgDropdownService: BusinessGroupDropdownService,
    private alertService: AlertService,
    private businessGroupService: BusinessGroupService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getBG(params['id']);
      }
    });
  }
  getBG(id: string) {
    this.businessGroupService.getBusinessGroup(id).subscribe({
      next: (data: any) => {
        this.data = data;
      },
      error: () => {},
    });
  }
  updateBG(data: any) {
    if (data && this.id) {
      this.businessGroupService.updateBusinessGroup(this.id, data).subscribe({
        next: (res) => {
          this.bgDropdownService.reload();
          this.alertService.success(
            'Success',
            'Business group has been updated successfully'
          );
          this.router.navigate(['/dashboard/onboarding/business-group']);
        },
        error: (err) => {},
      });
    }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/onboarding/business-group']);
  }
}
