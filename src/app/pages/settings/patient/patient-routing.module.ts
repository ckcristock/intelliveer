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
        redirectTo: 'consultation',
        pathMatch: 'full',
      },
      {
        path: 'consultation',
        loadChildren: () =>
          import(
            '@pages/settings/patient/consultation/consultation.module').then(
              (m) => m.ConsultationModule
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
