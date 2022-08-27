import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { AddFamilyMemberComponent } from './add-family-member.component';

const routes: Routes = [
  {
    path: '',
    component: AddFamilyMemberComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFamilyMemberRoutingModule {}
