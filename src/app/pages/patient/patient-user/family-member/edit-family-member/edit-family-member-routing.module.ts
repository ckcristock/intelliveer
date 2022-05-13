import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFamilyMemberComponent } from './edit-family-member.component';

const routes: Routes = [
  {
    path: '',
    component: EditFamilyMemberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFamilyMemberRoutingModule {}
