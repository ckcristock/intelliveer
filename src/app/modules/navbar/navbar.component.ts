import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	Renderer2,
	ViewChild,
	ViewEncapsulation,
} from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';
import { environment } from '@environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'top-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	searchFocus: boolean = false;
	showSelectedPatient: boolean = false;
	selectedPatient: any;
	searchResults: any = [
		{ user: 'Smith John', dob: '30/12/1984', active: true, id: 'P001' },
		{ user: 'Smith Doe', dob: '23/08/1988', active: true, id: 'P002' },
		{ user: 'Smith Walker', dob: '12/06/1994', active: false, id: 'P002' },
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
				if (window.location.hostname == 'localhost') {
					window.location.href = CONFIG.auth.host;
				} else {
					const authHost = new URL(window.location.href);
					const domainMeta = authHost.hostname.split('.');
					domainMeta.shift(); // remove first subdomain
					let origin =
						authHost.protocol + '//ivauth.' + domainMeta.join('.');
					window.location.href = origin;
				}
			},
			error: (err) => {
				console.log(err.message);
			},
		});
	}
	handleSearchResultsClick(patient: any) {
		if (patient.active) {
			this.searchFocus = false;
			this.showSelectedPatient = true;
			this.selectedPatient = patient;
			this.router.navigate(['/dashboard/patient/patient-user/patient-detail']);
		}
	}

	addPatient()
	{
		this.searchFocus = false;
		this.router.navigate(['/dashboard/header/add-patient']);
	}

}
