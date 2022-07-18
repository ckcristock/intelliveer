import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { UserService } from '@services/user/user.service';
import { filter } from 'rxjs';

@Component({
	selector: 'app-manage-user',
	templateUrl: './manage-user.component.html',
	styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
	onManagUser: boolean = true;
	usersList: any[] = [];
	roles: any[] = [];
	addRoute: string = '';
	popContent: string = '';
	popContentArray: any[] = [];
	popContentCounter: number = 0;
	urlSettings!: string;
	menuItems: any[] = [{ title: '', url: '' }];
	businessGroupDropdownSupscription: any;
	loginStatus: boolean = true;
	loginStatusButtonName: any = "Deactivate";
	selectedBusinessGroup: SelectedBusinessGroup | undefined;

	constructor(
		private router: Router,
		private globalRoutes: GlobalRoutesService,
		private alertService: AlertService,
		private userService: UserService,
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
		// this.urlSettings = this.globalRoutes.getSettingsUrl();
		this.menuItems.push(this.globalRoutes.getSettingsUserManageRoutes()[0]);
		console.log('menuitemss', this.menuItems);

		router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event: any) => {
				if (
					event.url ==
					this.globalRoutes.getSettingsUserManageRoutes()[0].child[0]
				) {
					this.onManagUser = false;
				} else {
					this.onManagUser = true;
				}
			});
	}

	ngOnInit(): void {
			// this.addRoute =
			// 	this.globalRoutes.getSettingsUserManageRoutes()[0].child[0].url;
			// this.userServ.refreshUsers();
			// this.userServ.getUsers().subscribe((resp: any) => {
			// 	this.users = resp;
			// 	this.userServ.getRoles().subscribe((resp: any) => {
			// 		this.roles = resp;
			// 		for (let i = 0; i < this.users.length; i++) {
			// 			for (let j = 0; j < this.roles.length; j++) {
			// 				for (
			// 					let y = 0;
			// 					y < this.users[i]['roles'].length;
			// 					y++
			// 				) {
			// 					if (
			// 						this.users[i]['roles'][y] == this.roles[j]._id
			// 					) {
			// 						this.users[i]['roles'][y] = this.roles[j];
			// 					}
			// 				}
			// 			}
			// 		}
			// 		console.log('usersss', this.users);
			// 	});
			// });
		}

	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
	}
	getList(bgId: any) {
		this.userService
				.getUserList(bgId)
				.subscribe({
					next: (res: any) => {
						this.usersList = res;
					},
					error: () => {}
				});
	}

	getOrgBgId(){
		let bgOrdID:any = localStorage.getItem('selected_business_group');
		console.log(bgOrdID)
			let user = this.authService.getLoggedInUser();
			if (user?.__ISSU__) {
		  if(bgOrdID == 'intelliveer' || bgOrdID == null){
			this.getList('intelliveer');
		  }else{
			this.getList(this.selectedBusinessGroup?.bgId)
		  }
		  }else{
		  this.getList(this.selectedBusinessGroup?.bgId)
		}
		}

  
	

	usersPopUp(roles: any, index: any) {
		if (this.popContentArray[index] == null) {
			this.popContentCounter++;
			roles.forEach((element: any) => {
				if (this.popContentCounter == 1) {
					this.popContentCounter++;
					this.popContent = `${element.name}`;
				} else {
					this.popContent = `${this.popContent}, ${element.name}`;
				}
				this.popContentArray[index] = this.popContent;
			});
			this.popContent = '';
			this.popContentCounter = 0;
		}
	}

	async gotoPersonalInfo(user: any) {
		// const data = await this.userService.getUserByIdAPI(user._id);
		// console.log(data)
		localStorage.setItem('userId', user._id);
		// const data2 = await this.userService.setUser(data);
		this.router.navigate(['/dashboard/settings/user-management/edit-user']);
	}

	updateUserLoginStatus(status:any,userId:any){
		if(this.loginStatus == true){
			this.loginStatus = false
			this.loginStatusButtonName = "Reactivate"
		}else{
			this.loginStatus = true
			this.loginStatusButtonName = "Deactivate"
		}
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
		  this.alertService.conformAlert('Are you sure?', 'You want to update a user login status')
			.then((result: any) => {
			  if (result.value) {
			    this.userService.userLoginStatus(this.loginStatus,userId,'intelliveer').subscribe(res=>{
				this.alertService.success(
					'Success',
					'User login status updated successfully'
				);
			    }, error => {
				console.log(error)
				});
		    }
		  })
	   }else{
		this.alertService.conformAlert('Are you sure?', 'You want to update a user login status')
		.then((result: any) => {
		  if (result.value) {
			this.userService.userLoginStatus(this.loginStatus,userId,this.selectedBusinessGroup?.bgId).subscribe(res=>{
			this.alertService.success(
				'Success',
				'User login status updated successfully'
			);
			}, error => {
			console.log(error)
			});
		}
	  })
	   }
    }

}
