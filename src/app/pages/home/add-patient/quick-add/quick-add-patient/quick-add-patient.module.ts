import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickAddPatientRoutingModule } from './quick-add-patient-routing.module';
import { PatientFormModule } from '@modules/forms/add-patient/patient-form/patient-form.module';
import { QuickAddPatientComponent } from "./quick-add-patient.component";

@NgModule({
  declarations: [QuickAddPatientComponent],
  imports: [
    CommonModule,
    QuickAddPatientRoutingModule,
    PatientFormModule
  ]
})
export class QuickAddPatientModule { }
