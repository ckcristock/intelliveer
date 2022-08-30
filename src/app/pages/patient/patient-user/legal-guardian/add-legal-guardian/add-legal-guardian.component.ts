import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { LegalGuardianService } from '@services/patient/family/legal-guardian/legal-guardian.service';

@Component({
	selector: 'app-add-legal-guardian',
	templateUrl: './add-legal-guardian.component.html',
	styleUrls: ['./add-legal-guardian.component.scss']
})
export class AddLegalGuardianComponent implements OnInit {
  businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	constructor(
		private router: Router,
		private legalGuardianService: LegalGuardianService,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private alertService: AlertService
	) {
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
	ngOnDestroy(): void {
		// this.bgDropdownSubscription.unsubscribe();
	}
	create(data: any) {
		let saveObj = {
			profile: {
				title: data.title,
				firstName: data.firstName,
				middleName: data.middleName,
				lastName: data.lastName,
				DOB: data.DOB,
				gender: data.gender,
				preferredPronoun: data.pronoun,
				language: data.language,
				martialStatus: data.martialStatus
			},
			address: data.address,
			contact: {
				email: data.emailId,
				primaryPhone: {
					type: data.primaryPhoneType,
					countryCode: '',
					number: data.primaryPhoneNumber
				},
				secondaryPhone: {
					type: data.secondaryPhoneType,
					countryCode: '',
					number: data.secondaryPhoneNumber
				},
				primaryPreferredCommunicationMethod: data.primaryPreferredCommunicationMethod,
				secondaryPreferredCommunicationMethod: data.secondaryPreferredCommunicationMethod,
				preferredTimingForCall: data.preferredTimingForCall
			},
			notes: data.note
		};
		this.alertService
			.conformAlert('Are you sure', 'you want to save legal Guardian')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.legalGuardianService
						.saveLegalGuardian(saveObj, this.bgId)
						.subscribe(
							(result: any) => {
								this.alertService.success(
									'Success',
									'Legal Guardian has been save successfully'
								);
								this.router.navigate([
									'/dashboard/patient/patient-user/legal-guardian'
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
		this.router.navigate([
			'/dashboard/patient/patient-user/legal-guardian'
		]);
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
