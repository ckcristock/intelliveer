import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleTemplateComponent } from './add-role-template.component';

const routes: Routes = [
  {
    path: '',
    component: AddRoleTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoleTemplateRoutingModule { }
