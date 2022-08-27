import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from '@guards/role-based/role-guard.guard';
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
        canActivate: [RoleGuardGuard],
        data:{
					isEnabled: true,
					value: "CAN_UPDATE_USER_PROFILE",
				  },
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
        canActivate: [RoleGuardGuard],
        data:{
					isEnabled: true,
					value: "CAN_UPDATE_USER_ROLE",
				  },
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
