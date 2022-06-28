import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRolTemplateComponent } from './add-rol-template.component';

const routes: Routes = [
  {
    path: '',
    component: AddRolTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRolTemplateRoutingModule { }
