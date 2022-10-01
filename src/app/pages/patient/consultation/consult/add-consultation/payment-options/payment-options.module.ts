import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentOptionsRoutingModule } from './payment-options-routing.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentOptionsComponent } from './payment-options.component';
import { PaymentParty1Module } from './payment-party1/payment-party1.module';

@NgModule({
	declarations: [PaymentOptionsComponent],
	imports: [
		CommonModule,
		PaymentOptionsRoutingModule,
		NavBarPillsModule,
		NgbModule,
		NgSelectModule,
		FormsModule,
		ReactiveFormsModule,
		PaymentParty1Module
	]
})
export class PaymentOptionsModule {}
