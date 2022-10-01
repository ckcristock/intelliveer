import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentOutcomeComponent } from './treatment-outcome.component';
import { TreatmentOutcomeRoutingModule } from './treatment-outcome-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TreatmentOutcomeComponent
  ],
  imports: [
    CommonModule,
    TreatmentOutcomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TreatmentOutcomeModule { }
