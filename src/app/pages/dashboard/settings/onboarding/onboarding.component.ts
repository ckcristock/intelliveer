import { Component, OnInit } from '@angular/core';
import { OnboardingService } from "@services/settings/onboarding/onboarding.service";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  onboardingData: any = undefined;

  constructor(private onboardingServ: OnboardingService) { }

  ngOnInit(): void {
    this.onboardingData = this.onboardingServ.getOnboardingData();
    console.log(this.onboardingData);
  }

}
