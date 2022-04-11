import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LegalEntityService } from '@services/onboarding/legal-entity/legal-entity.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.scss'],
})
export class LegalEntityComponent implements OnInit, OnDestroy {
  data: any;
  businessGroupDropdownSupscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private legalEntityService: LegalEntityService
  ) {
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          this.selectedBusinessGroup = bg;
          this.fetchList();
        }
      });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.businessGroupDropdownSupscription.unsubscribe();
  }
  fetchList() {
    if (this.selectedBusinessGroup) {
      this.legalEntityService
        .getLegalEntites(this.selectedBusinessGroup.bgId)
        .subscribe({
          next: (res) => {
            this.data = res;
          },
          error: () => {},
        });
    }
  }
  delete(id: string) {
    if (this.selectedBusinessGroup && id) {
      this.legalEntityService
        .deleteLegalEntity(this.selectedBusinessGroup.bgId, id)
        .subscribe({
          next: (res) => {
            this.fetchList();
          },
          error: () => {},
        });
    }
  }
}
