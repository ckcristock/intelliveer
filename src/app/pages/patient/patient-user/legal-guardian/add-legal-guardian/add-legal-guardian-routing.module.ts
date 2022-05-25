import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLegalGuardianComponent } from './add-legal-guardian.component';

const routes: Routes = [
  {
    path: '',
    component: AddLegalGuardianComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLegalGuardianRoutingModule {}
