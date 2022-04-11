import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';
import { environment } from '@environment/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'top-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}
  logOut() {
    this.authService.logout().subscribe({
      next: (res) => {
        this.cookieService.delete('isLoggedIn', '/', environment.domain);
        window.location.href = CONFIG.auth.host;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
