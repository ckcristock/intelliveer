import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { DentistService } from '@services/patient/dentist/dentist.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-provider',
	templateUrl: './edit-provider.component.html',
	styleUrls: ['./edit-provider.component.scss']
})
export class EditProviderComponent implements OnInit {
	id: string | undefined;
	data: any;
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	constructor(
		private router: Router,
		private dentistService: DentistService,
		private authService: AuthService,
		private activeRoute: ActivatedRoute,
			private businessGroupDropdownService: BusinessGroupDropdownService,
			private alertService: AlertService) {
		this.businessGroupDropdownSupscription =
				this.businessGroupDropdownService
					.businessGroup()
					.subscribe((bg) => {
						if (bg) {
							this.selectedBusinessGroup = bg;
							this.getOrgBgId();
						}
					});
	}

	ngOnInit(): void {
		
	}
	update(data: any) {
		let saveObj = {
			_id: this.id,
			firstName: data.firstName,
			lastName: data.lastName,
			officeName: data.officeName,
			officeAddress: {
			  addressLine1: data.address.addressLine1,
			  addressLine2: data.address.addressLine2,
			  city: data.address.city,
			  state: data.address.state,
			  country: data.address.country,
			  zipCode: data.address.zipCode
			},
			officePhoneNumber: {
			  type: "",
			  countryCode: "",
			  number: data.pPhoneNumber
			}
		  }
		  this.alertService
				  .conformAlert('Are you sure', 'you want to update provider')
				  .then((value: any) => {
					  if (value.isConfirmed) {
						  this.dentistService.update(saveObj, this.bgId).subscribe(
							  (result: any) => {
								  this.alertService.success(
									  'Success',
									  'Provider has been updated successfully'
								  );
								  this.router.navigate([
									  '/dashboard/patient/patient-user/provider'
								  ]);
							  },
							  (error) => {
								  console.log(error);
							  }
						  );
					  }
				  });
	}
	handleCancel() {
		this.router.navigate(['/dashboard/patient/patient-user/provider']);
	}
	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.getData();
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
				this.getData();
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
			this.getData();
		}
	}

	getData() {
		this.activeRoute.params.subscribe((params) => {
			if (params['id']) {
				this.id = params['id'];
				this.dentistService
					.getSingleData(this.bgId, params['id'])
					.subscribe({
						next: (data: any) => {
							this.data = data;
						},
						error: () => {}
					});
			}
		});
	}
}
