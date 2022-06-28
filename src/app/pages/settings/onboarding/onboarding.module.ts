import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import {
	NgbAccordionModule,
	NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [OnboardingComponent, ],
	imports: [CommonModule, OnboardingRoutingModule,
		NgbAccordionModule, NgbTooltipModule,
		FormsModule, ReactiveFormsModule],
})
export class OnboardingModule {}
