import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LegalEntityService } from '@services/onboarding/legal-entity/legal-entity.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-legal-entity',
  templateUrl: './edit-legal-entity.component.html',
  styleUrls: ['./edit-legal-entity.component.scss'],
})
export class EditLegalEntityComponent implements OnInit, OnDestroy {
  id: string | undefined;
  data: any;
  bgDropdownSubscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bgDropdownService: BusinessGroupDropdownService,
    private legalEntityService: LegalEntityService
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
        this.getLE(params['id']);
      }
    });
  }
  ngOnDestroy(): void {
    this.bgDropdownService.disable(false);
    this.bgDropdownSubscription.unsubscribe();
  }
  getLE(id: string) {
    if (this.selectedBusinessGroup && id) {
      this.legalEntityService
        .getLegalEntity(this.selectedBusinessGroup.bgId, id)
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
      this.legalEntityService
        .updateLegalEntity(this.selectedBusinessGroup.bgId, this.id, data)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/dashboard/settings/onboarding/legal-entity']);
          },
          error: () => {},
        });
    }
  }
  handleCancel() {
    this.router.navigate(['/dashboard/settings/onboarding/legal-entity']);
  }
}
