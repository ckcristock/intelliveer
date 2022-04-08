import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditLegalEntityRoutingModule } from './edit-legal-entity-routing.module';
import { EditLegalEntityComponent } from './edit-legal-entity.component';
import { LegalEntityFormModule } from '../legal-entity-form/legal-entity-form.module';

@NgModule({
  declarations: [EditLegalEntityComponent],
  imports: [CommonModule, LegalEntityFormModule, EditLegalEntityRoutingModule],
})
export class EditLegalEntityModule {}
