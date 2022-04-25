import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingRoutingModule } from './mapping-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MappingComponent } from './mapping.component';

@NgModule({
	declarations: [MappingComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MappingRoutingModule,
		NgSelectModule,
	],
})
export class MappingModule {}
