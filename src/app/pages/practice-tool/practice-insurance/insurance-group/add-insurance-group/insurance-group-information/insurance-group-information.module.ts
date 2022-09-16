import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceGroupInformationComponent } from './insurance-group-information.component';
import { InsuranceGroupInformationRoutingModule } from './insurance-group-information-routing.module';
import { InsuranceGroupInformationFormModule } from '@modules/forms/practice-tool/insurance-group-form/insurance-group-information-form/insurance-group-information-form.module';



@NgModule({
  declarations: [
    InsuranceGroupInformationComponent
  ],
  imports: [
    CommonModule,
    InsuranceGroupInformationRoutingModule,
    InsuranceGroupInformationFormModule
  ]
})
export class InsuranceGroupInformationModule { }
