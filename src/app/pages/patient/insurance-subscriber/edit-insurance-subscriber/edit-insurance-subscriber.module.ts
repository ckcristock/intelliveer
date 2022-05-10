import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceSubscriberFormModule } from '@modules/forms/patient/insurance-subscriber-form/insurance-subscriber-form.module';
import { EditInsuranceSubscriberRoutingModule } from './edit-insurance-subscriber-routing.module';
import { EditInsuranceSubscriberComponent } from './edit-insurance-subscriber.component';

@NgModule({
  declarations: [EditInsuranceSubscriberComponent],
  imports: [CommonModule, InsuranceSubscriberFormModule, EditInsuranceSubscriberRoutingModule],
})
export class EditInsuranceSubscriberModule {}
