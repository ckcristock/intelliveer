import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessGroupRoutingModule } from './business-group-routing.module';
import { BusinessGroupComponent } from './business-group.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BusinessGroupComponent],
  imports: [CommonModule, NgbDropdownModule, BusinessGroupRoutingModule],
})
export class BusinessGroupModule {}
