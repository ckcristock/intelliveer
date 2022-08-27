import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { EditBusinessGroupComponent } from './edit-business-group.component';

const routes: Routes = [
  {
    path: '',
    component: EditBusinessGroupComponent,
		canDeactivate: [CanDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBusinessGroupRoutingModule {}
