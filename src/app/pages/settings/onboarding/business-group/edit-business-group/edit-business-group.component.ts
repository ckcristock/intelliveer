import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';

@Component({
	selector: 'app-edit-business-group',
	templateUrl: './edit-business-group.component.html',
	styleUrls: ['./edit-business-group.component.scss']
})
export class EditBusinessGroupComponent
	implements OnInit, OnDestroy, AfterViewInit
{
	id: string | undefined;
	data: any;
	constructor(
		private router: Router,
		private activeRoute: ActivatedRoute,
		private bgDropdownService: BusinessGroupDropdownService,
		private alertService: AlertService,
		private businessGroupService: BusinessGroupService
	) {}

	ngOnInit(): void {
		this.activeRoute.params.subscribe((params) => {
			if (params['id']) {
				this.id = params['id'];
				this.getBG(params['id']);
			}
		});
	}
	ngAfterViewInit(): void {
		setTimeout(() => {
			this.bgDropdownService.disable(true);
		}, 100);
	}
	ngOnDestroy(): void {
		this.bgDropdownService.disable(false);
	}
	getBG(id: string) {
		this.businessGroupService.getBusinessGroup(id).subscribe({
			next: (data: any) => {
				this.data = data;
			},
			error: () => {}
		});
	}
	updateBG(data: any) {
		delete data.password;
		if (data && this.id) {
			data['slug'] = '';
			this.businessGroupService
				.updateBusinessGroup(this.id, data)
				.subscribe({
					next: (res) => {
						this.bgDropdownService.reload();
						this.alertService.success(
							'Success',
							'Business group has been updated successfully'
						);
						this.router.navigate([
							'/dashboard/settings/onboarding/business-group'
						]);
					},
					error: (err) => {}
				});
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/settings/onboarding/business-group']);
	}
}
