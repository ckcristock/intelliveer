import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { InsuranceSubscriberService } from '@services/patient/family/insurance-subscriber/insurance-subscriber.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-insurance-subscriber',
	templateUrl: './edit-insurance-subscriber.component.html',
	styleUrls: ['./edit-insurance-subscriber.component.scss']
})
export class EditInsuranceSubscriberComponent implements OnInit {
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
	getData() {
		this.activeRoute.params.subscribe((params) => {
			if (params['id']) {
				this.id = params['id'];
				this.insuranceSubscriberService
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
		console.log(data)
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
		this.alertService
			.conformAlert('Are you sure', 'you want to edit insurance subscriber')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.insuranceSubscriberService.update(saveObj, this.bgId).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Insurance Subscriber has been updated successfully'
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
	handleCancel() {
		this.router.navigate([
			'/dashboard/patient/patient-user/insurance-subscriber'
		]);
	}
}
