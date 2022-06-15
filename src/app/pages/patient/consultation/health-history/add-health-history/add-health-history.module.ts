import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHealthHistoryRoutingModule } from './add-health-history-routing.module';
import { AddHealthHistoryComponent } from './add-health-history.component';
import { HealthHistoryFormModule } from '@modules/forms/consultation/health-history-form/health-history-form.module';
@NgModule({
    declarations: [AddHealthHistoryComponent],
    imports: [CommonModule, AddHealthHistoryRoutingModule, HealthHistoryFormModule],
})
export class AddHealthHistoryModule {}
