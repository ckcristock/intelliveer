import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceSubscriberComponent } from './insurance-subscriber.component';
import { InsuranceSubscriberRoutingModule } from './insurance-subscriber-routing.module';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';



@NgModule({
  declarations: [
    InsuranceSubscriberComponent
  ],
  imports: [
    CommonModule,
    InsuranceSubscriberRoutingModule,
    ImageUploaderModule,
    AddressFormModule
  ]
})
export class InsuranceSubscriberModule { }
