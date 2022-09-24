import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleTemplatesRoutingModule } from './role-templates-routing.module';
import { RoleTemplatesComponent } from "./role-templates.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [RoleTemplatesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RoleTemplatesRoutingModule
  ],
})
export class RoleTemplatesModule { }
