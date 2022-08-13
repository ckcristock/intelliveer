import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalEntityRoutingModule } from './legal-entity-routing.module';
import { LegalEntityComponent } from './legal-entity.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LegalEntityComponent],
  imports: [CommonModule, NgbDropdownModule, LegalEntityRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
})
export class LegalEntityModule {}
