import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancePlanFormModule } from '@modules/forms/practice-tool/insurance-plan-form/insurance-plan-form.module';
import { EditInsuranceGroupRoutingModule } from './edit-insurance-group-routing.module';
import { EditInsuranceGroupComponent } from './edit-insurance-group.component';



@NgModule({
  declarations: [
    EditInsuranceGroupComponent
  ],
  imports: [
    CommonModule,
    EditInsuranceGroupRoutingModule,
    InsurancePlanFormModule
  ]
})
export class EditInsuranceGroupModule { }
