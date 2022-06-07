import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgGuardianRoutingModule } from './lg-guardian-routing.module';
import { LegalGuardianFormModule } from '@modules/forms/add-patient/legal-guardian-form/legal-guardian-form.module';
import { LgGuardianComponent } from "./lg-guardian.component";


@NgModule({
  declarations: [LgGuardianComponent],
  imports: [
    CommonModule,
    LgGuardianRoutingModule,
    LegalGuardianFormModule
  ]
})
export class LgGuardianModule { }
