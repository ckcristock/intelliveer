import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { HealthHistoryFormComponent } from './health-history-form.component';
import { ScrollspyModule } from '@modules/scrollspy/scrollspy.module';

@NgModule({
	declarations: [HealthHistoryFormComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NavBarPillsModule,
		ScrollspyModule
	],
	exports: [HealthHistoryFormComponent]
})
export class HealthHistoryFormModule {}
