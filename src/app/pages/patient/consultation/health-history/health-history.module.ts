import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthHistoryComponent } from './health-history.component';
import { HealthHistoryRoutingModule } from './health-history-routing.module';



@NgModule({
  declarations: [
    HealthHistoryComponent
  ],
  imports: [
    CommonModule,
    HealthHistoryRoutingModule
  ]
})
export class HealthHistoryModule { }
