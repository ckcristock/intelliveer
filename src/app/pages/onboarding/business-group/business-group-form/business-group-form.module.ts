import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessGroupFormComponent } from './business-group-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderModule } from '@src/app/components/image-uploader/image-uploader.module';

@NgModule({
  declarations: [BusinessGroupFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploaderModule,
  ],
  exports: [BusinessGroupFormComponent],
})
export class BusinessGroupFormModule {}
