import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PracticeComponent],
  imports: [CommonModule, NgbDropdownModule, PracticeRoutingModule],
})
export class PracticeModule {}
