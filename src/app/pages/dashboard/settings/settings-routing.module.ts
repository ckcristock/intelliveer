import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: '',
        redirectTo: 'settings-menu',
        pathMatch: 'full',
      },
      {
        path: 'settings-menu',
        loadChildren: () =>
          import('@pages/dashboard/settings/settings-menu/settings-menu.module').then(
            (m) => m.SettingsMenuModule
          )
      },
      {
        path: 'org-onboarding',
        loadChildren: () =>
          import('@pages/dashboard/settings/onboarding/onboarding.module').then(
            (m) => m.OnboardingModule
          )
      },
      {
        path: 'role-management',
        loadChildren: () =>
          import('@pages/dashboard/settings/role-management/role-management.module').then(
            (m) => m.RoleManagementModule
          )
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('@pages/dashboard/settings/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          )
      },
      {
        path: 'practice-onboarding',
        loadChildren: () =>
          import('@pages/dashboard/settings/practice-onboarding/practice-onboarding.module').then(
            (m) => m.PracticeOnboardingModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
