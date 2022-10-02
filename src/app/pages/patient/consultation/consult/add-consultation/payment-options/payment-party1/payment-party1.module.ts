import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentParty1Component } from './payment-party1.component';
import { PaymentOption1Module } from './payment-option1/payment-option1.module';

@NgModule({
	declarations: [PaymentParty1Component],
	imports: [CommonModule, PaymentOption1Module],
	exports: [PaymentParty1Component]
})
export class PaymentParty1Module {}
