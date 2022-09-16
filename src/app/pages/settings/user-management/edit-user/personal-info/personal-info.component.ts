import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { UserService } from '@services/user/user.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { AuthService } from '@services/auth/auth.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';

@Component({
	selector: 'app-personal-info',
	templateUrl: './personal-info.component.html',
	styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
	Form: FormGroup | undefined;
	@Input() formData: any | undefined = undefined;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Address', id: 'address' },
		{ title: 'Contact', id: 'contact' },
		{ title: 'Relations/Type', id: 'relationsType' },
		{ title: 'Emergency Contact', id: 'emergencyContact' }
	];

	testCounter: number = 0;

	letters = [{ letter: 'A', status: 'PRIMARY' }];
	user: any = {
		_id: 0,
		profile: {
			email: '',
			firstName: '',
			lastName: '',
			_id: 0
		},
		roles: []
	};

	userProfile = {
		firstName: '',
		lastName: '',
		email: ''
	};

	userRoles: any[] = [];

	undefinedH = {
		name: 'undefined'
	};
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	roleList: any;
	legelEntityList: any[] = [];
	locationList: any[] = [];
	practiceList: any[] = [];


	constructor(
		private router: Router,
		private globalRoutes: GlobalRoutesService,
		private fb: FormBuilder,
		private userService: UserService,
		private authService: AuthService,
		private addressFormService: AddressFormService,
		private businessGroupDropdownService: BusinessGroupDropdownService
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

	ngOnInit() {
		this.initForm(this.formData);
	}

	getUserData(bgId: any) {
		let userId = localStorage.getItem('userId')
		this.userService.getUserData(bgId, userId).subscribe({
			next: (res: any) => {
				this.user = res;
				if (res) {
					for (let i = 0; i < res.roles.length; i++) {
						this.userService.getUserRoleData(bgId, this.user.roles[i]).subscribe({
							next: (roledata: any) => {
								(this.roleList) ? this.roleList = this.roleList + roledata.name + ", " : this.roleList = roledata.name + ", ";
								this.userRoles.push(roledata);
							},
							error: () => { }
						});
					}
				}
			},
			error: () => { }
		});
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		console.log(bgOrdID)
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.getUserData('intelliveer');
			} else {
				this.getUserData(this.selectedBusinessGroup?.bgId)
			}
		} else {
			this.getUserData(this.selectedBusinessGroup?.bgId)
		}
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			firstName: [data?.firstName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
			lastName: [data?.lastName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
			physicalAddress: this.addressFormService.getAddressForm(
				data?.physicalAddress || {},
			),
		});
	}

	save(data: any) {
		// this.onSubmit.emit(data);
		this.userProfile = this.user.profile;
		this.userProfile = {
			firstName: this.user.profile.firstName,
			lastName: this.user.profile.lastName,
			email: this.user.profile.email
		};
		if (this.selectedBusinessGroup) {
			this.userService
				.updateUserProfile(this.userProfile, this.user._id, this.selectedBusinessGroup.bgId)
				.subscribe((resp: any) => {
					this.router.navigate([
						this.globalRoutes.getSettingsUserManageRoutes()[0].url
					]);
				});
		}

	}
	cancel() {
		this.router.navigate([
			this.globalRoutes.getSettingsUserManageRoutes()[0].url
		]);
	}

	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

	/** Get onboarding Details */

}
