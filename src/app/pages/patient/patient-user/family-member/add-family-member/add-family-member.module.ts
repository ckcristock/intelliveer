import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFamilyMemberRoutingModule } from './add-family-member-routing.module';
import { AddFamilyMemberComponent } from './add-family-member.component';
import { FamilyMemberFormModule } from '@modules/forms/patient/family-member-form/family-member-form.module';

@NgModule({
    declarations: [AddFamilyMemberComponent],
    imports: [CommonModule, FamilyMemberFormModule, AddFamilyMemberRoutingModule],
})
export class AddFamilyMemberModule {}
