import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { QuickAddPatientComponent } from './quick-add-patient.component';

const routes: Routes = [
  {
    path: '',
    component: QuickAddPatientComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: QuickAddPatientComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickAddPatientRoutingModule { }
