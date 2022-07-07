import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPolicyComponent } from './user-policy.component';

const routes: Routes = [
  {
    path: '',
    component: UserPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPolicyRoutingModule { }
