import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailComponent } from './patient-detail.component';
import { PatientDetailRoutingModule } from './patient-detail-routing.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';



@NgModule({
  declarations: [PatientDetailComponent],
  imports: [
    CommonModule,
    PatientDetailRoutingModule,
    ImageUploaderModule,
    PipesModule
  ]
})
export class PatientDetailModule { }
