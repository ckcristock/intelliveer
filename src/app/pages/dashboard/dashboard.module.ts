import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarModule } from '@modules/navbar/navbar.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    NgbAccordionModule,
    DashboardRoutingModule,
  ],
  providers: [BusinessGroupDropdownService],
})
export class DashboardModule {}
