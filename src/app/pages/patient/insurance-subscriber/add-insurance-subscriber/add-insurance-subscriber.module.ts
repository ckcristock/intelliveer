import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceSubscriberFormModule } from '@modules/forms/patient/insurance-subscriber-form/insurance-subscriber-form.module';
import { AddInsuranceSubscriberRoutingModule } from './add-insurance-subscriber-routing.module';
import { AddInsuranceSubscriberComponent } from './add-insurance-subscriber.component';
@NgModule({
    declarations: [AddInsuranceSubscriberComponent],
    imports: [CommonModule, InsuranceSubscriberFormModule, AddInsuranceSubscriberRoutingModule],
})
export class AddInsuranceSubscriberModule {}
