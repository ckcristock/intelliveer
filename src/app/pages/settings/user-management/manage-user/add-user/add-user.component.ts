import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { UserService } from '@services/user/user.service';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
	Form!: FormGroup;
	@Input() formData: any | undefined = undefined;
	//user = { firstName: '', lastName: '', email: '', password: '', roles:'' };
	urlManageUser: string = '';
	userEmail: any = '';
	menuItems: any[] = [];
	user = {
		creds: {
			email: '',
			password: ''
		},
		profile: {
			firstName: '',
			lastName: '',
			email: ''
		},
		roles: []
	};
	roles: any[] = [];
  businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;


	constructor(
		private router: Router,
		private fb: FormBuilder,
		private userService: UserService,
		private globalRoutes: GlobalRoutesService,
		private authService: AuthService,
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
		this.urlManageUser = this.globalRoutes.getSettingsUserManageUrl();
		this.menuItems.push(
			this.globalRoutes.getSettingsUserManageRoutes()[0].child[0]
		);
	}

	ngOnInit(): void {
		this.initForm(this.formData);
	}

	getOrgBgId(){
		let bgOrdID:any = localStorage.getItem('selected_business_group');
		console.log(bgOrdID)
			let user = this.authService.getLoggedInUser();
			if (user?.__ISSU__) {
		  if(bgOrdID == 'intelliveer' || bgOrdID == null){
			this.getRolesList('intelliveer');
		  }else{
			this.getRolesList(this.selectedBusinessGroup?.bgId)
		  }
		  }else{
		  this.getRolesList(this.selectedBusinessGroup?.bgId)
		}
		}

  getRolesList(bgId: any)
  {
	console.log(bgId);
	this.userService.getRoles(bgId).subscribe((resp: any) => {
        this.roles = resp;
		console.log(this.roles)
      });
  }

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			firstName: [data?.firstName || '', Validators.required],
			lastName: [data?.lastName || '', Validators.required],
			userEmail: [data?.userEmail || '', Validators.required],
			password: [data?.password || '', Validators.required],
			userRoles: [data?.userRoles || '', Validators.required]
		});
	}

	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
	}

	save(data: any) {
		this.user.creds.email = this.userEmail;
		this.user.profile.email = this.userEmail;
		if(this.selectedBusinessGroup)
    {
      this.userService
			.saveUsers(this.selectedBusinessGroup.bgId, this.user)
			.subscribe({
				next: (res: any) => {
					this.router.navigate([
						'/dashboard/settings/user-management/manage-user'
					]);
				},
				error: () => {}
			});
    }
	}

	// saveUser() {
	//   this.user.creds.email = this.userEmail;
	//   this.user.profile.email = this.userEmail;
	//   this.userServ.pushManageUser(this.user).subscribe((resp: any) => {
	//     this.userServ.refreshUsers();
	//     this.router.navigate(['/dashboard/settings/user-management/manage-user']);
	//   });
	// }
}
