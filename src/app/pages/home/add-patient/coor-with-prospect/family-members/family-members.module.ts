import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyMembersRoutingModule } from './family-members-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FamilyMembersComponent } from './family-members.component';


@NgModule({
  declarations: [FamilyMembersComponent,],
  imports: [
    CommonModule,
    FamilyMembersRoutingModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FamilyMembersModule { }
