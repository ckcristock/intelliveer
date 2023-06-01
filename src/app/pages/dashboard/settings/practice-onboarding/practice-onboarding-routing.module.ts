import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeOnboardingComponent } from './practice-onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeOnboardingComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'settings-menu',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'settings-menu',
      //   loadChildren: () =>
      //     import('@pages/dashboard/settings/settings-menu/settings-menu.module').then(
      //       (m) => m.SettingsMenuModule
      //     )
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeOnboardingRoutingModule { }
