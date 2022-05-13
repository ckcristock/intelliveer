import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientUserComponent } from './patient-user.component';
import { PatientUserRoutingModule } from './patient-user-routing.module';



@NgModule({
  declarations: [
    PatientUserComponent
  ],
  imports: [
    CommonModule,
    PatientUserRoutingModule
  ]
})
export class PatientUserModule { }
