import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './consultation.component';
import { ConsultationRoutingModule } from './consultation-routing.module';



@NgModule({
  declarations: [
    ConsultationComponent
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule
  ]
})
export class ConsultationModule { }
