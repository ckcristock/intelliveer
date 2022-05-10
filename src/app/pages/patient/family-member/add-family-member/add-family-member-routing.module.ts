import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFamilyMemberComponent } from './add-family-member.component';

const routes: Routes = [
  {
    path: '',
    component: AddFamilyMemberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFamilyMemberRoutingModule {}
