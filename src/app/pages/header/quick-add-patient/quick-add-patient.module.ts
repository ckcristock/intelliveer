import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAddPatientComponent } from './quick-add-patient.component';
import { QuickAddPatientRoutingModule } from './quick-add-patient-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuickAddPatientComponent
  ],
  imports: [
    CommonModule,
    QuickAddPatientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuickAddPatientModule { }
