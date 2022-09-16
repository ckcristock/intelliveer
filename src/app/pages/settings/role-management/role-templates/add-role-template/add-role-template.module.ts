import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoleTemplateRoutingModule } from './add-role-template-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRoleTemplateComponent } from "./add-role-template.component";
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';


@NgModule({
  declarations: [AddRoleTemplateComponent],
  imports: [
    CommonModule,
    AddRoleTemplateRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    ScrollspyModule,
    NavBarPillsModule
  ]
})
export class AddRoleTemplateModule { }
