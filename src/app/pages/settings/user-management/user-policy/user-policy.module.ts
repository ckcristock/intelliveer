import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPolicyRoutingModule } from './user-policy-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPolicyComponent } from "./user-policy.component";


@NgModule({
  declarations: [UserPolicyComponent],
  imports: [
    CommonModule,
    UserPolicyRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserPolicyModule { }
