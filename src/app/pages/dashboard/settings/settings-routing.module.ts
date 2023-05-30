import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      // {
      //   path: 'settings',
      //   loadChildren: () =>
      //     import('@pages/dashboard/settings/settings.module').then(
      //       (m) => m.SettingsModule
      //     )
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
