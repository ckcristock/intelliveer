import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: EditUserComponent,
    children: [
      {
        path: '',
        redirectTo: 'assign-role',
        pathMatch: 'full',
      },
      {
        path: 'personal-info',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/edit-user/personal-info/personal-info.module').then(
              (m) => m.PersonalInfoModule
            ),
      },
      {
        path: 'user-policy',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/edit-user/user-policy/user-policy.module').then(
              (m) => m.UserPolicyModule
            ),
      },
      {
        path: 'assign-role',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/edit-user/assign-role/assign-role.module').then(
              (m) => m.AssignRoleModule
            ),
      },
      {
        path: 'user-provider',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/edit-user/user-provider/user-provider.module').then(
              (m) => m.UserProviderModule
            ),
      },
      {
        path: 'user-document',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/edit-user/user-document/user-document.module').then(
              (m) => m.UserDocumentModule
            ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditUserRoutingModule { }
