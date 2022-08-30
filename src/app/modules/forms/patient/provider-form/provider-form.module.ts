import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ProviderFormComponent } from './provider-form.component';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ProviderFormComponent],
  imports: [
    CommonModule,
    ImageUploaderModule,
    AddressFormModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollspyModule,
    NavBarPillsModule,
    NgSelectModule
  ],
  exports: [ProviderFormComponent]
})
export class ProviderFormModule { }
