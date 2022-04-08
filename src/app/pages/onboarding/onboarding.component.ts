import { Component, OnDestroy, OnInit } from '@angular/core';

import { IMenuItem } from '../dashboard/menu';
import { onboardingMenuItems } from './menu';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit, OnDestroy {
  menuItems: IMenuItem[] = onboardingMenuItems;

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
