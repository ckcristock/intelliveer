import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalPatientThreeComponent } from './additional-patient-three.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalPatientThreeComponent,
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
