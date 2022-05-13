import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLegalGuardianComponent } from './edit-legal-guardian.component';

const routes: Routes = [
  {
    path: '',
    component: EditLegalGuardianComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLegalGuardianRoutingModule {}
