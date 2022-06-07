import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalPatientFourRoutingModule } from './additional-patient-four-routing.module';
import { AdditionalPatientFormModule } from '@modules/forms/add-patient/additional-patient-form/additional-patient-form.module';
import { AdditionalPatientFourComponent } from "./additional-patient-four.component";


@NgModule({
  declarations: [AdditionalPatientFourComponent],
  imports: [
    CommonModule,
    AdditionalPatientFourRoutingModule,
    AdditionalPatientFormModule
  ]
})
export class AdditionalPatientFourModule { }
