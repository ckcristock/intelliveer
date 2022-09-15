import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInsuranceGroupRoutingModule } from './add-insurance-group-routing.module';
import { AddInsuranceGroupComponent } from './add-insurance-group.component';

@NgModule({
	declarations: [AddInsuranceGroupComponent],
	imports: [CommonModule, AddInsuranceGroupRoutingModule]
})
export class AddInsuranceGroupModule {}
