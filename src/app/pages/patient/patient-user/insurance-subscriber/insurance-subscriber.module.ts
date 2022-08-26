import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceSubscriberComponent } from './insurance-subscriber.component';
import { InsuranceSubscriberRoutingModule } from './insurance-subscriber-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';



@NgModule({
  declarations: [
    InsuranceSubscriberComponent
  ],
  imports: [
    CommonModule,
    InsuranceSubscriberRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NavBarPillsModule,
    NgbModule //required for dropdown
  ]
})
export class InsuranceSubscriberModule { }
