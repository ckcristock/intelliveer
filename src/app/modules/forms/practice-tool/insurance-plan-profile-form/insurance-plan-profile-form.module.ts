import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancePlanProfileFormComponent } from './insurance-plan-profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	declarations: [InsurancePlanProfileFormComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
	exports: [InsurancePlanProfileFormComponent]
})
export class InsurancePlanProfileFormModule {}
