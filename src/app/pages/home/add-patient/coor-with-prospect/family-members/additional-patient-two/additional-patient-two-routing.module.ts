import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { AdditionalPatientTwoComponent } from './additional-patient-two.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalPatientTwoComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: AdditionalPatientTwoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionalPatientTwoRoutingModule { }
