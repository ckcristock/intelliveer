import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessGroupFormComponent } from './business-group-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ContactDetailsFormModule } from '@modules/forms/contact-details-form/contact-details-form.module';
import { ContactPersonFormModule } from '@modules/forms/contact-person-form/contact-person-form.module';

@NgModule({
  declarations: [BusinessGroupFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddressFormModule,
    ContactDetailsFormModule,
    ContactPersonFormModule,
    ImageUploaderModule,
  ],
  exports: [BusinessGroupFormComponent],
})
export class BusinessGroupFormModule {}
