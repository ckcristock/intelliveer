import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	Renderer2,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';
import { environment } from '@environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuickAddPatientComponent } from '@pages/header/quick-add-patient/quick-add-patient.component';

@Component({
	selector: 'top-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	searchFocus: boolean = false;
	showSelectedPatient: boolean = false;
	selectedPatient: any;
	searchResults: any = [
		{ user: 'Smith John', dob: '30/12/1984', active: true, id: 'P001' },
		{ user: 'Smith Doe', dob: '23/08/1988', active: true, id: 'P002' },
		{ user: 'Smith Walker', dob: '12/06/1994', active: false, id: 'P002' }
	];
	@ViewChild('searchDivRef') searchDivRef!: ElementRef;
	constructor(
		private authService: AuthService,
		private cookieService: CookieService,
		private renderer: Renderer2,
		private router: Router,
		private modalService: NgbModal
	) {
		this.renderer.listen('window', 'click', (e: Event) => {
			if (!this.searchDivRef.nativeElement.contains(e.target)) {
				this.searchFocus = false;
			}
		});
	}

	ngOnInit(): void {}
	logOut() {
		this.authService.logout().subscribe({
			next: (res) => {
				this.cookieService.delete(
					'isLoggedIn',
					'/',
					environment.domain
				);
				window.location.href = CONFIG.auth.host;
			},
			error: (err) => {
				console.log(err.message);
			}
		});
	}
	handleSearchResultsClick(patient: any) {
		if (patient.active) {
			this.searchFocus = false;
			this.showSelectedPatient = true;
			this.selectedPatient = patient;
			this.router.navigate([
				'/dashboard/patient/patient-user/patient-detail'
			]);
		}
	}

	openAddPatientDialog() {
		const modalRef = this.modalService.open(QuickAddPatientComponent, {
			size: 'lg'
		});
		modalRef.componentInstance.name = 'Ayushi';
		// this.router.navigate(['/header/add-patient']);
	}
}
