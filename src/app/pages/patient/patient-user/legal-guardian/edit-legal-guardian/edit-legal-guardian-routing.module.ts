import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { EditLegalGuardianComponent } from './edit-legal-guardian.component';

const routes: Routes = [
  {
    path: '',
    component: EditLegalGuardianComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLegalGuardianRoutingModule {}
