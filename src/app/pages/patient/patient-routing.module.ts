import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    children: [
      {
        path: '',
        redirectTo: 'patient-user',
        pathMatch: 'full',
      },
      {
        path: 'patient-user',
        loadChildren: () =>
          import('@pages/patient/patient-user/patient-user.module').then(
            (m) => m.PatientUserModule
          ),
      },
      {
        path: 'insurance',
        loadChildren: () =>
          import(
            '@pages/patient/insurance/insurance.module').then(
              (m) => m.InsuranceModule
            ),
      },
      {
        path: 'consultation',
        loadChildren: () =>
          import(
            '@pages/patient/consultation/consultation.module').then(
              (m) => m.ConsultationModule
            ),
      },
      {
        path: 'camera',
        loadChildren: () =>
          import(
            '@pages/patient/camera/camera.module').then(
              (m) => m.CameraModule
            ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
