import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {SelectedBusinessGroup,BusinessGroupDropdownService} from '@services/business-group-dropdown/business-group-dropdown.service';
import { InsuranceSubscriberService } from '@services/patient/family/insurance-subscriber/insurance-subscriber.service';
import { PaymentPartyService } from '@services/patient/family/payment-party/payment-party.service';

@Component({
	selector: 'app-add-insurance-subscriber',
	templateUrl: './add-insurance-subscriber.component.html',
	styleUrls: ['./add-insurance-subscriber.component.scss']
})
export class AddInsuranceSubscriberComponent implements OnInit {
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	constructor(
		private router: Router,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private alertService: AlertService,
		private insuranceSubscriberService: InsuranceSubscriberService
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

	create(data: any) {
		console.log(data);
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
    console.log(saveObj)
		this.alertService
			.conformAlert(
				'Are you sure',
				'you want to save insurance subscriber'
			)
			.then((value: any) => {
				if (value.isConfirmed) {
					this.insuranceSubscriberService
						.save(saveObj, this.bgId)
						.subscribe(
							(result: any) => {
								this.alertService.success(
									'Success',
									'Insurance Subscriber has been saved successfully'
								);
								this.router.navigate([
									'/dashboard/patient/patient-user/insurance-subscriber'
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
			'/dashboard/patient/patient-user/insurance-subscriber'
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
