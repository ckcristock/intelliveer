import { Component, OnInit } from '@angular/core';
import { OnboardingService } from "@services/settings/onboarding/onboarding.service";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  constructor(private onboardingServ: OnboardingService) { }

  ngOnInit(): void {
    console.log(this.onboardingServ.getOnboardingData());

  }

}
