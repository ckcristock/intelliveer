import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import {
	NgbAccordionModule,
	NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';

@NgModule({
	declarations: [OnboardingComponent, ],
	imports: [CommonModule, OnboardingRoutingModule,
		NgbAccordionModule, NgbTooltipModule,
		FormsModule, ReactiveFormsModule],
		providers: [ SearchStringPipePipe ]
})
export class OnboardingModule {}
