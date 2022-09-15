import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancePlanFormComponent } from './insurance-plan-form.component';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { ScrollspyModule } from '@modules/scrollspy/scrollspy.module';



@NgModule({
  declarations: [
    InsurancePlanFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
		AddressFormModule,
    NavBarPillsModule,
    NgSelectModule,
    ImageUploaderModule,
    ScrollspyModule
  ],
  exports: [InsurancePlanFormComponent]
})
export class InsurancePlanFormModule { }
