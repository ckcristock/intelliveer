import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPatientRoutingModule } from './add-patient-routing.module';
import { AddPatientComponent } from './add-patient.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	declarations: [AddPatientComponent],
	imports: [CommonModule, AddPatientRoutingModule, NgbModule, NgSelectModule]
})
export class AddPatientModule {}
