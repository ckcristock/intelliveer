import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { AdditionalPatientThreeComponent } from './additional-patient-three.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalPatientThreeComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: AdditionalPatientThreeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionalPatientThreeRoutingModule { }
