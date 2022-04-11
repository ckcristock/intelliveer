import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LocationService } from '@services/onboarding/location/location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, OnDestroy {
  data: any;
  businessGroupDropdownSupscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private locationService: LocationService
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
      this.locationService
        .getLocations(this.selectedBusinessGroup.bgId)
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
      this.locationService
        .deleteLocation(this.selectedBusinessGroup.bgId, id)
        .subscribe({
          next: (res) => {
            this.fetchList();
          },
          error: () => {},
        });
    }
  }
}
