import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';
import { environment } from '@environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';

@Component({
	selector: 'top-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	private compactSidebar = false;
	constructor(
		private authService: AuthService,
		private cookieService: CookieService,
		private menuBarService: MenuBarService
	) {}

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
			},
		});
	}
	toggleMenuBar() {
		this.compactSidebar = !this.compactSidebar;
		this.menuBarService.compactSideMenu(this.compactSidebar);
	}
}
