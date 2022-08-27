import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { AddLocationComponent } from './add-location.component';

const routes: Routes = [
  {
    path: '',
    component: AddLocationComponent,
		canDeactivate: [CanDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLocationRoutingModule {}
