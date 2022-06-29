import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';

@Component({
	selector: 'app-add-business-group',
	templateUrl: './add-business-group.component.html',
	styleUrls: ['./add-business-group.component.scss']
})
export class AddBusinessGroupComponent implements OnInit {
	constructor(
		private router: Router,
		private bgDropdownService: BusinessGroupDropdownService,
		private businessGroupService: BusinessGroupService,
		private alertService: AlertService
	) {}

	ngOnInit(): void {}
	createBG(data: any) {
		if (data) {
			this.businessGroupService.createBusinessGroup(data).subscribe({
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
