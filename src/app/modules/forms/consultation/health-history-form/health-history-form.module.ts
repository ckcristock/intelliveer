import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollSpyDirective } from '@directives/scrollspy';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { HealthHistoryFormComponent } from './health-history-form.component';

@NgModule({
	declarations: [HealthHistoryFormComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NavBarPillsModule
	],
	exports: [HealthHistoryFormComponent]
})
export class HealthHistoryFormModule {}
