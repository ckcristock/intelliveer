import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMembersComponent } from './family-members.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyMembersComponent,
    children: [
      {
        path: '',
        component: FamilyMembersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyMembersRoutingModule { }
