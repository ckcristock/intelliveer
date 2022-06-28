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
        redirectTo: 'onboarding',
        pathMatch: 'full',
      },
      {
        path: 'onboarding',
        loadChildren: () =>
          import('@pages/settings/onboarding/onboarding.module').then(
            (m) => m.OnboardingModule
          ),
      },
      {
        path: 'role-management',
        loadChildren: () =>
          import(
            '@pages/settings/role-management/role-management.module').then(
              (m) => m.RoleManagementModule
            ),
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/user-management.module').then(
              (m) => m.UserManagementModule
            ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
