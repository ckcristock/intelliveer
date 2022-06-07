import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalPatientThreeRoutingModule } from './additional-patient-three-routing.module';
import { AdditionalPatientFormModule } from '@modules/forms/add-patient/additional-patient-form/additional-patient-form.module';
import { AdditionalPatientThreeComponent } from "./additional-patient-three.component";


@NgModule({
  declarations: [AdditionalPatientThreeComponent],
  imports: [
    CommonModule,
    AdditionalPatientThreeRoutingModule,
    AdditionalPatientFormModule
  ]
})
export class AdditionalPatientThreeModule { }
