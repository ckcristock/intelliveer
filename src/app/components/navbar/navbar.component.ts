import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CONFIG } from '@src/app/config';
import { AuthService } from '@src/app/services/auth/auth.service';
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
        this.cookieService.delete('isLoggedIn', '/');
        window.location.href = CONFIG.auth.host;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
