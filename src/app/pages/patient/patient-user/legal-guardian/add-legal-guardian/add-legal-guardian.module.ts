import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLegalGuardianComponent } from './add-legal-guardian.component';
import { AddLegalGuardianRoutingModule } from './add-legal-guardian-routing.module';
import { LegalGuardianFormModule } from '@modules/forms/patient/legal-guardian-form/legal-guardian-form.module';



@NgModule({
  declarations: [
    AddLegalGuardianComponent
  ],
  imports: [
    CommonModule,
    AddLegalGuardianRoutingModule,
    LegalGuardianFormModule
  ]
})
export class AddLegalGuardianModule { }
