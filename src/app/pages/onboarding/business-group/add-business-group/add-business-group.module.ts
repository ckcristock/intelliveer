import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBusinessGroupRoutingModule } from './add-business-group-routing.module';
import { AddBusinessGroupComponent } from './add-business-group.component';
import { BusinessGroupFormModule } from '../business-group-form/business-group-form.module';

@NgModule({
  declarations: [AddBusinessGroupComponent],
  imports: [
    CommonModule,
    BusinessGroupFormModule,
    AddBusinessGroupRoutingModule,
  ],
})
export class AddBusinessGroupModule {}
