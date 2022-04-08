import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeFormComponent } from './practice-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderModule } from '@src/app/components/image-uploader/image-uploader.module';

@NgModule({
  declarations: [PracticeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploaderModule,
  ],
  exports: [PracticeFormComponent],
})
export class PracticeFormModule {}
