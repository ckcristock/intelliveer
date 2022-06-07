import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalPatientTwoRoutingModule } from './additional-patient-two-routing.module';
import { AdditionalPatientFormModule } from '@modules/forms/add-patient/additional-patient-form/additional-patient-form.module';
import { AdditionalPatientTwoComponent } from "./additional-patient-two.component";


@NgModule({
  declarations: [AdditionalPatientTwoComponent],
  imports: [
    CommonModule,
    AdditionalPatientTwoRoutingModule,
    AdditionalPatientFormModule
  ]
})
export class AdditionalPatientTwoModule { }
