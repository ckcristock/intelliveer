import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddConsultationComponent } from './add-consultation.component';
import { AddConsultationRoutingModule } from './add-consultation-routing.module';
import { ProgressBarModule } from '@modules/forms/progress-bar/progress-bar.module';



@NgModule({
  declarations: [
    AddConsultationComponent
  ],
  imports: [
    CommonModule,
    AddConsultationRoutingModule,
    ProgressBarModule
  ]
})
export class AddConsultationModule { }
