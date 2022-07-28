import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProviderComponent } from './user-provider.component';

const routes: Routes = [
  {
    path: '',
    component: UserProviderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProviderRoutingModule { }
