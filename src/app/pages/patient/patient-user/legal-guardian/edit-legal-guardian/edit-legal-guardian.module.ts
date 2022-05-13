import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLegalGuardianComponent } from './edit-legal-guardian.component';
import { EditLegalGuardianRoutingModule } from './edit-legal-guardian-routing.module';
import { LegalGuardianFormModule } from '@modules/forms/patient/legal-guardian-form/legal-guardian-form.module';



@NgModule({
  declarations: [
    EditLegalGuardianComponent
  ],
  imports: [
    CommonModule,
    EditLegalGuardianRoutingModule,
    LegalGuardianFormModule
  ]
})
export class EditLegalGuardianModule { }
