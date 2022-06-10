import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FamilyMemberFormComponent } from './family-member-form.component';




@NgModule({
  declarations: [FamilyMemberFormComponent],
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
    ImageUploaderModule,
    AddressFormModule,
    PipesModule
  ],
  exports: [FamilyMemberFormComponent]
})
export class FamilyMemberFormModule { }
