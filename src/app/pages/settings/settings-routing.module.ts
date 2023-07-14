import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RoleGuardGuard } from '@guards/role-based/role-guard.guard';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    // canActivate: [RoleGuardGuard],
    data:{
      isEnabled: true, 
      value: "",
      },
    children: [
      {
        path: '',
        redirectTo: '',
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
      {
        path: 'patient',
        loadChildren: () =>
          import(
            '@pages/settings/patient/patient.module').then(
              (m) => m.PatientModule
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
