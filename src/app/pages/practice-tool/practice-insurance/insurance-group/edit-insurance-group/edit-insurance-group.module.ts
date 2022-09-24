import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInsuranceGroupRoutingModule } from './edit-insurance-group-routing.module';
import { EditInsuranceGroupComponent } from './edit-insurance-group.component';

@NgModule({
	declarations: [EditInsuranceGroupComponent],
	imports: [CommonModule, EditInsuranceGroupRoutingModule]
})
export class EditInsuranceGroupModule {}
