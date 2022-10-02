import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOption1Component } from './payment-option1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	declarations: [PaymentOption1Component],
	imports: [
		CommonModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule
	],
	exports: [PaymentOption1Component]
})
export class PaymentOption1Module {}
