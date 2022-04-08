import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';

@Component({
  selector: 'app-edit-business-group',
  templateUrl: './edit-business-group.component.html',
  styleUrls: ['./edit-business-group.component.scss'],
})
export class EditBusinessGroupComponent implements OnInit {
  id: string | undefined;
  data: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bgDropdownService: BusinessGroupDropdownService,
    private alertService: AlertService
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
    this.http
      .get(`${CONFIG.backend.host}/auth/api/v1/business-group/${id}`)
      .subscribe({
        next: (data: any) => {
          this.data = data;
        },
        error: () => {},
      });
  }
  updateBG(data: any) {
    if (data && this.id) {
      this.http
        .patch(
          `${CONFIG.backend.host}/auth/api/v1/business-group/${this.id}`,
          data
        )
        .subscribe({
          next: (data) => {
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
