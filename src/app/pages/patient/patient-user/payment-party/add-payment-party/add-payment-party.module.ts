import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPartyFormModule } from '@modules/forms/patient/payment-party-form/payment-party-form.module';
import { AddPaymentPartyComponent } from './add-payment-party.component';
import { AddPaymentPartyRoutingModule } from './add-payment-party-routing.module';

@NgModule({
    declarations: [AddPaymentPartyComponent],
    imports: [CommonModule, PaymentPartyFormModule, AddPaymentPartyRoutingModule],
})
export class AddPaymentPartyModule {}
