import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';

@Component({
  selector: 'app-business-group',
  templateUrl: './business-group.component.html',
  styleUrls: ['./business-group.component.scss'],
})
export class BusinessGroupComponent implements OnInit {
  loading: boolean = true;
  data: any;
  checkedItems: any = [];
  checkAllState = false;
  constructor(
    private router: Router,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private businessGroupService: BusinessGroupService,
    private alertService: AlertService
  ) {}
  ngOnDestroy(): void {}
  ngOnInit() {
    this.fetchBgList();
  }
  fetchBgList() {
    this.businessGroupService.getBusinessGroups().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: () => {},
    });
  }
  deleteBG(id: string) {
    if (id) {
      this.alertService.conformAlert('Are you sure?', 'You want to delete')
      .then((result) => {
        if (result.value) {
          this.businessGroupService.deleteBusinessGroup(id).subscribe({
            next: (data) => {
              this.businessGroupDropdownService.reload();
              this.fetchBgList();
            },
            error: () => {},
          });
        }
      });
      
    }
  }
  navigateTo(bg: string, module: string) {
    this.businessGroupDropdownService.setSelectedBusinessGroup(bg);
    this.router.navigate([`dashboard/onboarding/${module}`]);
  }
}
