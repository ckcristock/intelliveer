import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule, NgbDropdownModule, RouterModule],
	exports: [NavbarComponent]
})
export class NavbarModule {}
