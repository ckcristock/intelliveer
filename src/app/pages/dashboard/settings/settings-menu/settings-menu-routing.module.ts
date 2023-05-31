import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsMenuComponent } from './settings-menu.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsMenuComponent,
    children: [
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
export class SettingsMenuRoutingModule { }
