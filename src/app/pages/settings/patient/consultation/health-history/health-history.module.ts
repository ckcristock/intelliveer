import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthHistoryComponent } from './health-history.component';
import { HealthHistoryRoutingModule } from './health-history-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [HealthHistoryComponent],
	imports: [CommonModule, HealthHistoryRoutingModule, NgbDropdownModule]
})
export class HealthHistoryModule {}
