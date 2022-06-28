import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleTemplatesComponent } from './role-templates.component';

const routes: Routes = [
  {
    path: '',
    component: RoleTemplatesComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleTemplatesRoutingModule { }
