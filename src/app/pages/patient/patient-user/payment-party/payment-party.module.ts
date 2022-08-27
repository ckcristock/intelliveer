import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPartyComponent } from './payment-party.component';
import { PaymentPartyRoutingModule } from './payment-party-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';

@NgModule({
	declarations: [PaymentPartyComponent],
	imports: [
		CommonModule,
		PaymentPartyRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		NavBarPillsModule,
		NgbModule //required for dropdown
	]
})
export class PaymentPartyModule {}
