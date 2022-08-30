import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PaymentPartyService } from '@services/patient/family/payment-party/payment-party.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-add-payment-party',
	templateUrl: './add-payment-party.component.html',
	styleUrls: ['./add-payment-party.component.scss']
})
export class AddPaymentPartyComponent implements OnInit, OnDestroy {
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	constructor(
		private router: Router,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private alertService: AlertService,
		private paymentPartyService: PaymentPartyService
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
				relationshipWithPatient: data.relationship,
				title: data.title,
				firstName: data.firstName,
				middleName: data.middleName,
				lastName: data.lastName,
				DOB: data.DOB,
				gender: data.gender,
				preferredPronoun: data.pronoun,
				language: data.language,
				maritalStatus: data.maritalStatus
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
				primaryPreferredCommunicationMethod:
					data.primaryPreferredCommunicationMethod,
				secondaryPreferredCommunicationMethod:
					data.secondaryPreferredCommunicationMethod,
				preferredTimingForCall: data.preferredTimingForCall
			},
			financials: {
				workStatus: data.workStatus,
				occupation: data.occupation,
				employer: data.employer,
				creditRating: data.creditRating,
				SSN: data.SSN
			},
			notes: data.note
		};
		this.alertService
			.conformAlert('Are you sure', 'you want to save payment party')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.paymentPartyService.save(saveObj, this.bgId).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Payment Party has been saved successfully'
							);
							this.router.navigate([
								'/dashboard/patient/patient-user/payment-party'
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
		this.router.navigate(['/dashboard/patient/patient-user/payment-party']);
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
