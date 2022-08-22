import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentOutcomeComponent } from './treatment-outcome.component';
import { TreatmentOutcomeRoutingModule } from './treatment-outcome-routing.module';



@NgModule({
  declarations: [
    TreatmentOutcomeComponent
  ],
  imports: [
    CommonModule,
    TreatmentOutcomeRoutingModule
  ]
})
export class TreatmentOutcomeModule { }
