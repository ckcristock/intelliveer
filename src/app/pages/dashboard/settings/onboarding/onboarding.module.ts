import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingService } from "@services/settings/onboarding/onboarding.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OnboardingRoutingModule
  ],
  providers: [OnboardingService]
})
export class OnboardingModule { }
