import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentMechanicsComponent } from './treatment-mechanics.component';
import { TreatmentMechanicsRoutingModule } from './treatment-mechanics-routing.module';



@NgModule({
  declarations: [
    TreatmentMechanicsComponent
  ],
  imports: [
    CommonModule,
    TreatmentMechanicsRoutingModule
  ]
})
export class TreatmentMechanicsModule { }
