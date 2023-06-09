import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PracticeOnboardingComponent } from './practice-onboarding/practice-onboarding.component';


@NgModule({
  declarations: [
    SettingsMenuComponent,
    OnboardingComponent,
    RoleManagementComponent,
    UserManagementComponent,
    PracticeOnboardingComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
