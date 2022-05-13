import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FamilyMemberRoutingModule } from './family-member-routing.module';
import { FamilyMemberComponent } from './family-member.component';



@NgModule({
  declarations: [
    FamilyMemberComponent
  ],
  imports: [
    CommonModule,
    FamilyMemberRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule //required for dropdown
  ]
})
export class FamilyMemberModule { }
