import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalEntityRoutingModule } from './legal-entity-routing.module';
import { LegalEntityComponent } from './legal-entity.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LegalEntityComponent],
  imports: [CommonModule, NgbDropdownModule, LegalEntityRoutingModule],
})
export class LegalEntityModule {}
