import {
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild
} from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';
import { environment } from '@environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientUserHeaderIconMenuItems } from '@pages/patient/menu';

@Component({
	selector: 'top-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	searchFocus: boolean = false;
	showSelectedPatient: boolean = false;
	selectedPatient: any;
	username: any;
	searchWord: string = '';
	userLst: any = [
		{ user: 'Smith John', dob: '12/30/1984', active: true, id: 'P001', sex:'Female', isPin: false, profileUrl: 'assets/images/doctor.jpg' },
		{ user: 'Smith Doe', dob: '08/23/1988', active: true, id: 'P002', sex:'Female', isPin: false, profileUrl: 'assets/images/doctor2.jpg' },
		{ user: 'Smith Walker', dob: '12/06/1994', active: true, id: 'P003', sex:'Male', isPin: false, profileUrl: 'https://imedica.brainstormforce.com/wp-content/uploads/2015/02/doc1.jpg' },
		{ user: 'Oil Diva', dob: '03/15/1994', active: true, id: 'P004', sex:'Female', isPin: false, profileUrl: 'https://www.parkinsonsdiseasespecialist.com/wp-content/uploads/2020/08/shivam-profile-pic.jpg' },
		{ user: 'Pie Energy', dob: '01/30/1994', active: true, id: 'P005', sex:'Female', isPin: false, profileUrl: 'https://th.bing.com/th/id/OIP.90CUUa066hZfeG-UXb3mtgHaKA?pid=ImgDet&w=758&h=1024&rs=1' },
		{ user: 'Lemon Serenade', dob: '01/08/1994', active: false, id: 'P006', sex:'Female', isPin: false, profileUrl: 'assets/images/doctor2.jpg' }
	];
	@ViewChild('searchDivRef') searchDivRef!: ElementRef;
	userSearchLst: any[] = [];
	selectUserLst: any[] = [];
	userClickCount: number = 0;
	allMenuItems: IMenuItem[] = patientUserHeaderIconMenuItems;
	menuItems: any[] = [];
	showUserCard: boolean = false;
	showSelectedPatientUserCard: boolean = false;

	constructor(
		private authService: AuthService,
		private cookieService: CookieService,
		private renderer: Renderer2,
		private router: Router
	) {
		this.renderer.listen('window', 'click', (e: Event) => {
			if (!this.searchDivRef.nativeElement.contains(e.target)) {
				this.searchFocus = false;
			}
		});
	}

	ngOnInit(): void {
		this.userSearchLst = this.userLst;
		this.getUsername();
		for (let i = 0; i < this.allMenuItems.length; i++) {
			if(this.allMenuItems[i].shortTitle)
			{
				this.menuItems.push(this.allMenuItems[i]);
			}
		}
		this.selectedPatient = JSON.parse(
			localStorage.getItem('selectedPatient') || ''
		);
		if(this.selectedPatient)
		{
			this.selectUserLst.push(this.selectedPatient)
			this.showSelectedPatient = true;
		}
		else
		{
			this.selectUserLst = [];
			this.showSelectedPatient = false;
		}
	}
	logOut() {
		this.authService.logout().subscribe({
			next: (res) => {
				this.cookieService.delete(
					'isLoggedIn',
					'/',
					environment.domain
				);
				localStorage.clear();
				window.location.href = CONFIG.auth.host;
			},
			error: (err) => {
				console.log(err.message);
			}
		});
	}
	handleSearchResultsClick(patient: any) {
		if (patient.active) {
			this.searchWord = "";
			this.searchFocus = false;
			this.showSelectedPatient = true;
			this.selectedPatient = patient;
			const findDuplicate = this.selectUserLst.filter(item => item.id === patient.id);
			if(findDuplicate.length == 0)
			{
				patient.isPin = false;
				if(this.selectUserLst.length < 4)
				{
					this.selectUserLst[this.selectUserLst.length] = patient;
					if(this.selectUserLst.length >= 1)
					{
						this.selectUserLst.reverse();
					}
				}
				else
				{
					let indexArray: any[] = [];
					for (let i = 1; i < this.selectUserLst.length; i++) {
						if(this.selectUserLst[i].isPin == true )
						{
							indexArray.push(i);
						}
					}
					let index: any;
					switch (indexArray.length) {
						case 1:
							index = indexArray[0];
							for (let i = this.selectUserLst.length - 1; i > 0; i--) {
								if(index != i)
								{
									if(this.selectUserLst[i - 1].isPin)
									{
										this.selectUserLst[i] = this.selectUserLst[i - 2];
									}
									else
									{
										this.selectUserLst[i] = this.selectUserLst[i - 1];
									}
								}
								else
								{
									this.selectUserLst[i] = this.selectUserLst[i];
								}									
							}
							this.selectUserLst[0] = patient;
							break;						
						case 2:
							let a1 = [1, 2, 3];
							let a2 = indexArray;
							let missingIndexArray = a1.filter(item => a2.indexOf(item) < 0);
							this.selectUserLst[missingIndexArray[0]] = this.selectUserLst[0];
							this.selectUserLst[0] = patient;
							break;
						case 3:
							this.selectedPatient = patient;
							break;					
						default:
							let getLastIndex = this.selectUserLst.length - 1
							this.selectUserLst.splice(getLastIndex, 1);
							for (let i = this.selectUserLst.length; i > 0; i--) {
								this.selectUserLst[i] = this.selectUserLst[i - 1];
							}
							this.selectUserLst[0] = patient;
							break;
					}
				}
			}
			else
			{
				let index = this.selectUserLst.findIndex(obj => obj.id == findDuplicate[0].id);
				if(findDuplicate[0].isPin)
				{
					this.selectUserLst[index] = this.selectUserLst[0];
					patient.isPin = false;
					this.selectUserLst[0] = patient;
					this.selectedPatient = patient;
				}
				else
				{
					patient.isPin = false;
					this.selectUserLst.splice(index, 1);
					for (let i = this.selectUserLst.length; i > 0; i--) {
						this.selectUserLst[i] = this.selectUserLst[i - 1];
					}
					this.selectUserLst[0] = patient;
					this.selectedPatient = patient;
				}
			}
			localStorage.setItem('selectedPatient', JSON.stringify(this.selectedPatient));
			this.router.navigate([
				'/dashboard/patient/camera'
			]);
		}
	}

	addPatient() {
		this.searchFocus = false;
		this.router.navigate(['/dashboard/header/add-patient']);
	}
	getUsername() {
		const user = this.cookieService.get('user');
		console.log(user);
		if (user) {
			this.username = JSON.parse(user);
		} else {
			this.username = null;
		}
	}

	fetchSearch($event: any): void {
		if ($event.target.value === '') {
			this.userSearchLst = this.userLst;
		}
		this.userSearchLst = this.userLst.filter(
			(searchResultObj: any) => {
				return searchResultObj.user
					.toLowerCase()
					.startsWith($event.target.value.toLowerCase());
			}
		);
	}

	selectUserMenuItem(selectUser: any, displayUI: string)
	{
		let index = this.selectUserLst.findIndex(obj => obj.id == selectUser.id);
		if(selectUser.isPin)
		{
			this.selectUserLst[index] = this.selectUserLst[0];
			selectUser.isPin = false;
			this.selectUserLst[0] = selectUser;
			this.selectedPatient = selectUser;
		}
		else
		{
			selectUser.isPin = false;
			this.selectUserLst.splice(index, 1);
			for (let i = this.selectUserLst.length; i > 0; i--) {
				this.selectUserLst[i] = this.selectUserLst[i - 1];
			}
			this.selectUserLst[0] = selectUser;
			this.selectedPatient = selectUser;
		}
		localStorage.setItem('selectedPatient', JSON.stringify(this.selectedPatient));
		if(displayUI == "showSelectedPatientUserCard")
		{
			this.showSelectedPatientUserCard = false;
		}
		else
		{
			this.showUserCard = false;
		}
	}

	pinUser(selectUser: any)
	{
		selectUser.isPin = true;
		this.showUserCard = false;
	}

	unPinUser(selectUser: any)
	{
		selectUser.isPin = false;
		this.showUserCard = false;
	}
}
