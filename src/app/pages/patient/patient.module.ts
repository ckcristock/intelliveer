import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';



@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    PipesModule
  ]
})
export class PatientModule { }
