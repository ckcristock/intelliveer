import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { UserService } from '@services/user/user.service';
import { RoleService } from '@services/role/role.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';

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

	userRoles = {
		roles: []
	};

	undefinedH = {
		name: 'undefined'
	};
  businessGroupDropdownSupscription: any;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;

	constructor(
		private router: Router,
		private globalRoutes: GlobalRoutesService,
		private fb: FormBuilder,
		private userServ: UserService,
		private roleSev: RoleService,
    private businessGroupDropdownService: BusinessGroupDropdownService
    ) {
      this.businessGroupDropdownSupscription =
        this.businessGroupDropdownService
          .businessGroup()
          .subscribe((bg) => {
            if (bg) {
              this.selectedBusinessGroup = bg;
            }
          });}

	async ngOnInit() {
		this.initForm(this.formData);

		//this.user = await this.userServ.getUser();
		this.user = await JSON.parse(localStorage.getItem('user') || '[]');
		console.log('user', this.user);
		// if (this.user._id == null) {
		// 	this.router.navigate([
		// 		this.globalRoutes.getSettingsUserManageRoutes()[0].url
		// 	]);
		// }

		if (this.user.length != 0) {
      console.log(this.user)
			for (let i = 0; i < this.user['roles'].length; i++) {
				this.roleSev
					.getRoleById(this.user.roles[i])
					.subscribe((resp: any) => {
						if (resp != null) {
							this.user.roles[i] = resp;
						} else {
							this.user['roles'][i] = this.undefinedH;
						}
					});
			}
		}
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			email: [data?.check1 || ''],
			check2: [data?.check2 || '']
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
    if(this.selectedBusinessGroup)
    {
      this.userServ
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
}
