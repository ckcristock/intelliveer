import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { ProviderFormComponent } from './provider-form.component';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProviderFormComponent],
  imports: [
    CommonModule,
    ImageUploaderModule,
    AddressFormModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProviderFormComponent]
})
export class ProviderFormModule { }
