import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';
import cryptoRandomString from 'crypto-random-string';

@Component({
	selector: 'app-add-business-group',
	templateUrl: './add-business-group.component.html',
	styleUrls: ['./add-business-group.component.scss']
})
export class AddBusinessGroupComponent
	implements OnInit, OnDestroy, AfterViewInit
{
	constructor(
		private router: Router,
		private bgDropdownService: BusinessGroupDropdownService,
		private businessGroupService: BusinessGroupService,
		private alertService: AlertService
	) {}

	ngOnInit(): void {}
	ngAfterViewInit() {
		setTimeout(() => {
			this.bgDropdownService.disable(true);
		}, 100);
	}
	ngOnDestroy(): void {
		this.bgDropdownService.disable(false);
	}
	createBG(data: any) {
		if (data) {
			data['slug'] = '';
			this.businessGroupService
				.createBusinessGroup({
					user: {
						creds: {
							email: data.contactPerson.email,
							password: cryptoRandomString({ length: 10 }) // Will be replaced
						},
						profile: {
							firstName: data.contactPerson.firstName,
							lastName: data.contactPerson.lastName
						}
					},
					businessGroup: data
				})
				.subscribe({
					next: (res) => {
						this.bgDropdownService.reload();
						this.alertService.success(
							'Success',
							'Business group has been created successfully'
						);
						this.router.navigate([
							'/dashboard/settings/onboarding/business-group'
						]);
					},
					error: () => {}
				});
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/settings/onboarding/business-group']);
	}
}
