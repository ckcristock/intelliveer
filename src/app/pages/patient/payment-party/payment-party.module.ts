import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPartyComponent } from './payment-party.component';
import { PaymentPartyRoutingModule } from './payment-party-routing.module';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';



@NgModule({
  declarations: [
    PaymentPartyComponent
  ],
  imports: [
    CommonModule,
    PaymentPartyRoutingModule,
    ImageUploaderModule,
    AddressFormModule
  ]
})
export class PaymentPartyModule { }
