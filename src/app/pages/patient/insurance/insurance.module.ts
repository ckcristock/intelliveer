import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { InsuranceComponent } from './insurance.component';
import { PolicyInfoComponent } from './policy-info/policy-info.component';
import { OrthoBenefComponent } from './ortho-benef/ortho-benef.component';
import { DentalBenefComponent } from './dental-benef/dental-benef.component';
import { ActiveComponent } from './active/active.component';


@NgModule({
  declarations: [
    InsuranceComponent,
    PolicyInfoComponent,
    OrthoBenefComponent,
    DentalBenefComponent,
    ActiveComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ]
})
export class InsuranceModule { }
