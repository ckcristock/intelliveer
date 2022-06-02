import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [PatientComponent],
	imports: [
		CommonModule,
		PatientRoutingModule,
		PipesModule,
		NgbAccordionModule,
	],
})
export class PatientModule {}
