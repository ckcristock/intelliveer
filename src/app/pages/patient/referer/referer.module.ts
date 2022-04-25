import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefererComponent } from './referer.component';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { RefererRoutingModule } from './referer-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';



@NgModule({
  declarations: [RefererComponent],
  imports: [
    CommonModule,
    RefererRoutingModule,
    ImageUploaderModule,
    AddressFormModule,
    PipesModule
  ]
})
export class RefererModule { }
