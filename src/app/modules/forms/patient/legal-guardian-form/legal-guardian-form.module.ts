import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { LegalGuardianFormComponent } from './legal-guardian-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    LegalGuardianFormComponent
  ],
  imports: [
    NgSelectModule,
    CommonModule,
    ImageUploaderModule,
    AddressFormModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollspyModule,
    NavBarPillsModule
  ],
  exports: [LegalGuardianFormComponent]
})
export class LegalGuardianFormModule { }
