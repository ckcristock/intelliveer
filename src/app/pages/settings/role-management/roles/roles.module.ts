import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolesComponent } from './roles.component';

@NgModule({
  declarations: [RolesComponent, 
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    NgbModule
  ]
})
export class RolesModule { }
