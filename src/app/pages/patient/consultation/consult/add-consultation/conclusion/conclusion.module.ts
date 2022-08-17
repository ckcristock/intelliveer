import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConclusionComponent } from './conclusion.component';
import { ConclusionRoutingModule } from './conclusion-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ConclusionComponent],
	imports: [
		CommonModule,
		ConclusionRoutingModule,
		NgSelectModule,
		NgbModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class ConclusionModule {}
