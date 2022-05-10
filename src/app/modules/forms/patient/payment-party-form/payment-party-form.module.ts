import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PaymentPartyFormComponent } from './payment-party-form.component';



@NgModule({
  declarations: [
    PaymentPartyFormComponent
  ],
  imports: [
    CommonModule,
    ImageUploaderModule,
    AddressFormModule
  ],
  exports: [PaymentPartyFormComponent]
})
export class PaymentPartyFormModule { }
