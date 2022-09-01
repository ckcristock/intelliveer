import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { PaymentPartyService } from '@services/patient/family/payment-party/payment-party.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-payment-party',
	templateUrl: './edit-payment-party.component.html',
	styleUrls: ['./edit-payment-party.component.scss']
})
export class EditPaymentPartyComponent implements OnInit {
	id: string | undefined;
	data: any;
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	constructor(
		private router: Router,
		private activeRoute: ActivatedRoute,
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
	getPaymentPartyData() {
		this.activeRoute.params.subscribe((params) => {
			if (params['id']) {
				this.id = params['id'];
				this.paymentPartyService
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
	update(data: any) {
		let saveObj = {
			_id: this.id,
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
			.conformAlert('Are you sure', 'you want to edit payment party')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.paymentPartyService.update(saveObj, this.bgId).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Payment Party has been updated successfully'
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
	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.getPaymentPartyData();
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
				this.getPaymentPartyData();
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
			this.getPaymentPartyData();
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/patient/patient-user/payment-party']);
	}
}
