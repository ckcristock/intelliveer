import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	SelectedBusinessGroup,
	BusinessGroupDropdownService
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { LegalGuardianService } from '@services/patient/family/legal-guardian/legal-guardian.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-legal-guardian',
	templateUrl: './edit-legal-guardian.component.html',
	styleUrls: ['./edit-legal-guardian.component.scss']
})
export class EditLegalGuardianComponent implements OnInit {
	id: string | undefined;
	data: any;
	bgDropdownSubscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	constructor(
		private router: Router,
		private activeRoute: ActivatedRoute,
		private bgDropdownService: BusinessGroupDropdownService,
		private practiceLocation: PracticeService,
		private alertService: AlertService,
		private authService: AuthService,
		private legalGuardianService: LegalGuardianService
	) {
		this.bgDropdownSubscription = this.bgDropdownService
			.businessGroup()
			.subscribe((bg) => {
				if (bg) {
					this.selectedBusinessGroup = bg;
					this.getOrgBgId();
				}
			});
		this.bgDropdownService.disable(true);
	}

	ngOnInit(): void {}
	ngOnDestroy(): void {
		this.bgDropdownService.disable(false);
		this.bgDropdownSubscription.unsubscribe();
	}
	update(data: any) {
		console.log(data)
		let saveObj = {
			_id: this.id,
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
			.conformAlert('Are you sure', 'you want to update legal Guardian')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.legalGuardianService
						.updateLegalGuardian(saveObj, this.bgId)
						.subscribe(
							(result: any) => {
								this.alertService.success(
									'Success',
									'Legal Guardian has been updated successfully'
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

	getLegalGuardianData() {
		this.activeRoute.params.subscribe((params) => {
			if (params['id']) {
				this.id = params['id'];
				this.legalGuardianService
					.getSingleLegalGuardianData(this.bgId, params['id'])
					.subscribe({
						next: (data: any) => {
							this.data = data;
							console.log(data)
						},
						error: () => {}
					});
			}
		});
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.getLegalGuardianData();
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
				this.getLegalGuardianData();
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
			this.getLegalGuardianData();
		}
	}
}
