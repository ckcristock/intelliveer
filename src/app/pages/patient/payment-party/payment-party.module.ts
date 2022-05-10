import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPartyComponent } from './payment-party.component';
import { PaymentPartyRoutingModule } from './payment-party-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentPartyComponent
  ],
  imports: [
    CommonModule,
    PaymentPartyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PaymentPartyModule { }
