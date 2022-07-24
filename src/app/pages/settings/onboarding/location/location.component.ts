import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  bgId:any
  constructor(
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private locationService: LocationService,
    private router: Router,
  ) {
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          this.selectedBusinessGroup = bg;
          this.getUserOrdID();
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
  fetchListSuperUser(bgId:any){
      this.locationService
        .getLocations(bgId)
        .subscribe({
          next: (res) => {
            this.data = res;
          },
          error: () => {},
        });
  
  }
  delete(id: string) {
    if(!this.bgId){
			this.bgId = this.selectedBusinessGroup?.bgId
		}
    if (this.selectedBusinessGroup && id) {
      this.locationService
        .deleteLocation(this.bgId, id)
        .subscribe({
          next: (res) => {
            this.getUserOrdID();
          },
          error: () => {},
        });
    }
  }
  /** Add New locations */
  addLocation(){
    this.router.navigate(['/dashboard/settings/onboarding/location/add']);
  }
  getUserOrdID(){
		let bgOrdID:any = localStorage.getItem('selected_business_group');
		if(bgOrdID == null){
		  this.fetchListSuperUser('intelliveer')
		  this.bgId = 'intelliveer';
		}else{
			this.bgId= '';
		  this.fetchList();
		}
	  }
}
