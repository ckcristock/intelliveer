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
		{ user: 'Smith John', dob: '30/12/1984', active: true, id: 'P001', profileUrl: 'assets/images/doctor.jpg' },
		{ user: 'Smith Doe', dob: '23/08/1988', active: true, id: 'P002', profileUrl: 'assets/images/doctor2.jpg' },
		{ user: 'Smith Walker', dob: '12/06/1994', active: true, id: 'P003', profileUrl: 'https://imedica.brainstormforce.com/wp-content/uploads/2015/02/doc1.jpg' },
		{ user: 'Oil Diva', dob: '15/03/1994', active: true, id: 'P004', profileUrl: 'https://thumbs.dreamstime.com/z/portrait-smiling-woman-doctor-profile-23602015.jpg' },
		{ user: 'Pie Energy', dob: '30/01/1994', active: true, id: 'P005', profileUrl: 'https://th.bing.com/th/id/OIP.sOWsOOU81OApsLqngmwrzAHaHa?pid=ImgDet&rs=1' },
		{ user: 'Lemon Serenade', dob: '01/08/1994', active: false, id: 'P006', profileUrl: 'assets/images/doctor2.jpg' }
	];
	@ViewChild('searchDivRef') searchDivRef!: ElementRef;
	userSearchLst: any[] = [];
	selectUserLst: any[] = [];
	userClickCount: number = 0;
	userPin: boolean = false;
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
			this.selectUserLst.push(patient);
			this.selectUserLst.reverse();
			localStorage.setItem('selectedPatient', JSON.stringify(this.selectedPatient))
			// this.router.navigate([
			// 	'/dashboard/patient/camera'
			// ]);
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
}
