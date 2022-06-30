import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'manage-user',
        pathMatch: 'full',
      },
     
      {
        path: 'manage-user',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/users/users.module').then(
              (m) => m.UsersModule
            ),
      },
      {
        path: 'manage-user/add',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/users/add-user/add-user.module').then(
              (m) => m.AddUserModule
            ),
      },
      {
        path: 'user-policy',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/user-policy/user-policy.module').then(
              (m) => m.UserPolicyModule
            ),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
