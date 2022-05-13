import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPartyFormModule } from '@modules/forms/patient/payment-party-form/payment-party-form.module';
import { EditPaymentPartyRoutingModule } from './edit-payment-party-routing.module';
import { EditPaymentPartyComponent } from './edit-payment-party.component';



@NgModule({
  declarations: [EditPaymentPartyComponent],
  imports: [CommonModule, PaymentPartyFormModule, EditPaymentPartyRoutingModule],
})
export class EditPaymentPartyModule {}
