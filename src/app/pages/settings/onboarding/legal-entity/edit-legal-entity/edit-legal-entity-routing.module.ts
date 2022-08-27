import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { EditLegalEntityComponent } from './edit-legal-entity.component';

const routes: Routes = [
  {
    path: '',
    component: EditLegalEntityComponent,
		canDeactivate: [CanDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLegalEntityRoutingModule {}
