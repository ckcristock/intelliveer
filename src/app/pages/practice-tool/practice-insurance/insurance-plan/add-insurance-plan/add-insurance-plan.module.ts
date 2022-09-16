import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInsurancePlanComponent } from './add-insurance-plan.component';
import { AddInsurancePlanRoutingModule } from './add-insurance-plan-routing.module';
import { InsurancePlanFormModule } from '@modules/forms/practice-tool/insurance-plan-form/insurance-plan-form.module';



@NgModule({
  declarations: [
    AddInsurancePlanComponent
  ],
  imports: [
    CommonModule,
    AddInsurancePlanRoutingModule,
    InsurancePlanFormModule
  ]
})
export class AddInsurancePlanModule { }
