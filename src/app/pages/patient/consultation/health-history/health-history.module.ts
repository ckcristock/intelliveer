import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthHistoryComponent } from './health-history.component';
import { HealthHistoryRoutingModule } from './health-history-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HealthHistoryComponent
  ],
  imports: [
    CommonModule,
    HealthHistoryRoutingModule,
    NgbModule
  ]
})
export class HealthHistoryModule { }
