import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationFormComponent } from './location-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderModule } from '@src/app/components/image-uploader/image-uploader.module';

@NgModule({
  declarations: [LocationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploaderModule,
  ],
  exports: [LocationFormComponent],
})
export class LocationFormModule {}
