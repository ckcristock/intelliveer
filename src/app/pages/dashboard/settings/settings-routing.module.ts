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
        path: 'role-management',
        loadChildren: () =>
          import('@pages/dashboard/settings/role-management/role-management.module').then(
            (m) => m.RoleManagementModule
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
