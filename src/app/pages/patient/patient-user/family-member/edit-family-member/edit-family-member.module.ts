import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFamilyMemberRoutingModule } from './edit-family-member-routing.module';
import { EditFamilyMemberComponent } from './edit-family-member.component';
import { FamilyMemberFormModule } from '@modules/forms/patient/family-member-form/family-member-form.module';


@NgModule({
  declarations: [EditFamilyMemberComponent],
  imports: [CommonModule, FamilyMemberFormModule, EditFamilyMemberRoutingModule],
})
export class EditFamilyMemberModule {}
