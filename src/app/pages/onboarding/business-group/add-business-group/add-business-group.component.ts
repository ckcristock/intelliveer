import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';

@Component({
  selector: 'app-add-business-group',
  templateUrl: './add-business-group.component.html',
  styleUrls: ['./add-business-group.component.scss'],
})
export class AddBusinessGroupComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private bgDropdownService: BusinessGroupDropdownService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}
  createBG(data: any) {
    if (data) {
      this.http
        .post(`${CONFIG.backend.host}/auth/api/v1/business-group`, data)
        .subscribe({
          next: (data) => {
            this.bgDropdownService.reload();
            this.alertService.success(
              'Success',
              'Business group has been created successfully'
            );
            this.router.navigate(['/dashboard/onboarding/business-group']);
          },
          error: () => {},
        });
    }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/onboarding/business-group']);
  }
}
