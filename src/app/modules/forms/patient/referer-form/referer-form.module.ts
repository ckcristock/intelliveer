import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { RefererFormComponent } from './referer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RefererFormComponent],
  imports: [
    CommonModule,
    ImageUploaderModule,
    AddressFormModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RefererFormComponent]
})
export class RefererFormModule { }
