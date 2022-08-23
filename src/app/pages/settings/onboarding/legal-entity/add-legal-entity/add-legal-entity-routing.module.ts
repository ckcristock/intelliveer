import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { AddLegalEntityComponent } from './add-legal-entity.component';

const routes: Routes = [
  {
    path: '',
    component: AddLegalEntityComponent,
    canDeactivate: [CanDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLegalEntityRoutingModule {}
