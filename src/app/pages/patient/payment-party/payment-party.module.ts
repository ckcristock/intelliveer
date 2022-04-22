import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPartyComponent } from './payment-party.component';
import { PaymentPartyRoutingModule } from './payment-party-routing.module';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';



@NgModule({
  declarations: [
    PaymentPartyComponent
  ],
  imports: [
    CommonModule,
    PaymentPartyRoutingModule,
    ImageUploaderModule,
    AddressFormModule,
    PipesModule
  ]
})
export class PaymentPartyModule { }
