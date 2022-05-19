import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailComponent } from './patient-detail.component';
import { PatientDetailRoutingModule } from './patient-detail-routing.module';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from '@modules/tabs/tabs.module';



@NgModule({
  declarations: [PatientDetailComponent],
  imports: [
    CommonModule,
    PatientDetailRoutingModule,
    ImageUploaderModule,
    PipesModule,
    NgSelectModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientDetailModule { }