import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleManagementComponent } from './role-management.component';

const routes: Routes = [
  {
    path: '',
    component: RoleManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'manage-role-template',
        pathMatch: 'full',
      },
      {
        path: 'manage-role-template',
        loadChildren: () =>
          import('@pages/settings/role-management/role-templates/role-templates.module').then(
            (m) => m.RoleTemplatesModule
          ),
      },
      {
        path: 'manage-role-template/add',
        loadChildren: () =>
          import('@pages/settings/role-management/role-templates/add-role-template/add-role-template.module').then(
            (m) => m.AddRoleTemplateModule
          ),
      },
      {
        path: 'manage-role-template/edit',
        loadChildren: () =>
          import('@pages/settings/role-management/role-templates/add-role-template/add-role-template.module').then(
            (m) => m.AddRoleTemplateModule
          ),
      },
      {
        path: 'manage-role',
        loadChildren: () =>
          import(
            '@pages/settings/role-management/roles/roles.module').then(
              (m) => m.RolesModule
            ),
      },
      {
        path: 'manage-role/add',
        loadChildren: () =>
          import(
            '@pages/settings/role-management/roles/add-role/add-role.module').then(
              (m) => m.AddRoleModule
            ),
      },
      {
        path: 'manage-role/edit',
        loadChildren: () =>
          import(
            '@pages/settings/role-management/roles/edit-role/edit-role.module').then(
              (m) => m.EditRoleModule
            ),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleManagementRoutingModule { }
