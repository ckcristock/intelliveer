import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInsurancePlanComponent } from './edit-insurance-plan.component';
import { EditInsurancePlanRoutingModule } from './edit-insurance-plan-routing.module';
import { InsurancePlanFormModule } from '@modules/forms/practice-tool/insurance-plan-form/insurance-plan-form.module';



@NgModule({
  declarations: [
    EditInsurancePlanComponent
  ],
  imports: [
    CommonModule,
    EditInsurancePlanRoutingModule,
    InsurancePlanFormModule
  ]
})
export class EditInsurancePlanModule { }
