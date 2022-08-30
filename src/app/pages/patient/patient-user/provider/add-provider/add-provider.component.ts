import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { DentistService } from '@services/patient/dentist/dentist.service';

@Component({
	selector: 'app-add-provider',
	templateUrl: './add-provider.component.html',
	styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {
  businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	constructor(private router: Router, 
    private dentistService: DentistService,
    private authService: AuthService,
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

	ngOnInit(): void {}

	create(data: any) {
		console.log(data);
    let saveObj = {
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
			.conformAlert('Are you sure', 'you want to save provider')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.dentistService.save(saveObj, this.bgId).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Provider has been saved successfully'
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
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
		}
	}
}
