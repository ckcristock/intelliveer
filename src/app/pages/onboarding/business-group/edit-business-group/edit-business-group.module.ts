import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBusinessGroupRoutingModule } from './edit-business-group-routing.module';
import { EditBusinessGroupComponent } from './edit-business-group.component';
import { BusinessGroupFormModule } from '../business-group-form/business-group-form.module';

@NgModule({
  declarations: [EditBusinessGroupComponent],
  imports: [
    CommonModule,
    BusinessGroupFormModule,
    EditBusinessGroupRoutingModule,
  ],
})
export class EditBusinessGroupModule {}
