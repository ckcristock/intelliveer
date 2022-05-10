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
        redirectTo: 'patient-detail',
        pathMatch: 'full',
      },
      {
        path: 'patient-detail',
        loadChildren: () =>
          import('@pages/patient/patient-detail/patient-detail.module').then(
            (m) => m.PatientDetailModule
          ),
      },
      {
        path: 'provider',
        loadChildren: () =>
          import(
            '@pages/patient/provider/provider.module').then(
              (m) => m.ProviderModule
            ),
      },
      {
        path: 'referer',
        loadChildren: () =>
          import(
            '@pages/patient/referer/referer.module').then(
              (m) => m.RefererModule
            ),
      },
      {
        path: 'legal-guardian',
        loadChildren: () =>
          import(
            '@pages/patient/legal-guardian/legal-guardian.module').then(
              (m) => m.LegalGuardianModule
            ),
      },
      {
        path: 'payment-party',
        loadChildren: () =>
          import(
            '@pages/patient/payment-party/payment-party.module').then(
              (m) => m.PaymentPartyModule
            ),
      },
      {
        path: 'insurance-subscriber',
        loadChildren: () =>
          import(
            '@pages/patient/insurance-subscriber/insurance-subscriber.module').then(
              (m) => m.InsuranceSubscriberModule
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
