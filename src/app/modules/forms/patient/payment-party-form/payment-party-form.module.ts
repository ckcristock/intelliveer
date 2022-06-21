import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PaymentPartyFormComponent } from './payment-party-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';



@NgModule({
  declarations: [
    PaymentPartyFormComponent
  ],
  imports: [
    CommonModule,
    ImageUploaderModule,
    AddressFormModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollspyModule,
    NavBarPillsModule
  ],
  exports: [PaymentPartyFormComponent]
})
export class PaymentPartyFormModule { }
