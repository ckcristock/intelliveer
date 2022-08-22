import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { AdditionalPatientFourComponent } from './additional-patient-four.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalPatientFourComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: AdditionalPatientFourComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionalPatientFourRoutingModule { }
