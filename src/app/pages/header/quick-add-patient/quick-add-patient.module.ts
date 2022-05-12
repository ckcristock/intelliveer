import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAddPatientComponent } from './quick-add-patient.component';
import { QuickAddPatientRoutingModule } from './quick-add-patient-routing.module';

@NgModule({
  declarations: [
    QuickAddPatientComponent
  ],
  imports: [
    CommonModule,
    QuickAddPatientRoutingModule
  ]
})
export class QuickAddPatientModule { }
