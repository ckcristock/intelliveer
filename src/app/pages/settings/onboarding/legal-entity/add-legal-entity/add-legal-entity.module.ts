import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLegalEntityRoutingModule } from './add-legal-entity-routing.module';
import { AddLegalEntityComponent } from './add-legal-entity.component';
import { LegalEntityFormModule } from '@modules/forms/onboarding/legal-entity-form/legal-entity-form.module';

@NgModule({
  declarations: [AddLegalEntityComponent],
  imports: [CommonModule, LegalEntityFormModule, AddLegalEntityRoutingModule],
})
export class AddLegalEntityModule {}
