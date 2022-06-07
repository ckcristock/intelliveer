import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientFormModule } from '@modules/forms/add-patient/patient-form/patient-form.module';
import { PatientComponent } from "./patient.component";


@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    PatientFormModule
  ]
})
export class PatientModule { }
