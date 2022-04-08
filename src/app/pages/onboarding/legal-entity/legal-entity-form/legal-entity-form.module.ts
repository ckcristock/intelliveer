import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalEntityFormComponent } from './legal-entity-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderModule } from '@src/app/components/image-uploader/image-uploader.module';

@NgModule({
  declarations: [LegalEntityFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploaderModule,
  ],
  exports: [LegalEntityFormComponent],
})
export class LegalEntityFormModule {}
