import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RoleGuardGuard } from '@guards/role-based/role-guard.guard';
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
        // canActivate: [RoleGuardGuard],
        data:{
					isEnabled: true,
					value: "CAN_RETRIEVE_USER",
				  },
        loadChildren: () =>
          import(
            '@pages/settings/user-management/manage-user/manage-user.module').then(
              (m) => m.ManageUserModule
            ),
      },
      {
        path: 'manage-user/add-user',
        // canActivate: [RoleGuardGuard],
        data:{
					isEnabled: true,
					value: "CAN_CREATE_USER",
				  },
        loadChildren: () =>
          import(
            '@pages/settings/user-management/manage-user/add-user/add-user.module').then(
              (m) => m.AddUserModule
            ),
      },
      {
        path: 'edit-user',
        loadChildren: () =>
          import(
            '@pages/settings/user-management/edit-user/edit-user.module').then(
              (m) => m.EditUserModule
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
