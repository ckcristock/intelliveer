import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './consultation.component';
import { ConsultationRoutingModule } from './consultation-routing.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarModule } from '@modules/forms/progress-bar/progress-bar.module';



@NgModule({
  declarations: [
    ConsultationComponent
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    NgbAccordionModule,
    ProgressBarModule
  ]
})
export class ConsultationModule { }
