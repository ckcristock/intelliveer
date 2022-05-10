import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { LegalGuardianFormComponent } from './legal-guardian-form.component';



@NgModule({
  declarations: [
    LegalGuardianFormComponent
  ],
  imports: [
    CommonModule,
    ImageUploaderModule,
    AddressFormModule
  ],
  exports: [LegalGuardianFormComponent]
})
export class LegalGuardianFormModule { }
