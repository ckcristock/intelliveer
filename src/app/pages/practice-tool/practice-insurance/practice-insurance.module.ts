import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeInsuranceComponent } from './practice-insurance.component';
import { PracticeInsuranceRoutingModule } from './practice-insurance-routing.module';



@NgModule({
  declarations: [PracticeInsuranceComponent],
  imports: [
    CommonModule,
    PracticeInsuranceRoutingModule
  ]
})
export class PracticeInsuranceModule { }
