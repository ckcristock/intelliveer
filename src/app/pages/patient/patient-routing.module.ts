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
        path: 'provider/add',
        loadChildren: () =>
          import(
            '@pages/patient/provider/add-provider/add-provider.module').then(
              (m) => m.AddProviderModule
            ),
      },
			{
				path: 'provider/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/provider/edit-provider/edit-provider.module'
					).then((m) => m.EditProviderModule),
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
        path: 'referer/add',
        loadChildren: () =>
          import(
            '@pages/patient/referer/add-referer/add-referer.module').then(
              (m) => m.AddRefererModule
            ),
      },
			{
				path: 'referer/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/referer/edit-referer/edit-referer.module'
					).then((m) => m.EditRefererModule),
			},
      {
        path: 'family_members',
        loadChildren: () =>
          import(
            '@pages/patient/family-member/family-member.module').then(
              (m) => m.FamilyMemberModule
            ),
      },
      {
        path: 'family_members/add',
        loadChildren: () =>
          import(
            '@pages/patient/family-member/add-family-member/add-family-member.module').then(
              (m) => m.AddFamilyMemberModule
            ),
      },
			{
				path: 'family_members/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/family-member/edit-family-member/edit-family-member.module'
					).then((m) => m.EditFamilyMemberModule),
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
        path: 'legal-guardian/add',
        loadChildren: () =>
          import(
            '@pages/patient/legal-guardian/add-legal-guardian/add-legal-guardian.module').then(
              (m) => m.AddLegalGuardianModule
            ),
      },
      {
        path: 'legal-guardian/edit/:id',
        loadChildren: () =>
          import(
            '@pages/patient/legal-guardian/edit-legal-guardian/edit-legal-guardian.module').then(
              (m) => m.EditLegalGuardianModule
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
        path: 'payment-party/add',
        loadChildren: () =>
          import(
            '@pages/patient/payment-party/add-payment-party/add-payment-party.module').then(
              (m) => m.AddPaymentPartyModule
            ),
      },
      {
        path: 'payment-party/edit/:id',
        loadChildren: () =>
          import(
            '@pages/patient/payment-party/edit-payment-party/edit-payment-party.module').then(
              (m) => m.EditPaymentPartyModule
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
        path: 'insurance-subscriber/add',
        loadChildren: () =>
          import(
            '@pages/patient/insurance-subscriber/add-insurance-subscriber/add-insurance-subscriber.module').then(
              (m) => m.AddInsuranceSubscriberModule
            ),
      },
			{
				path: 'insurance-subscriber/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/insurance-subscriber/edit-insurance-subscriber/edit-insurance-subscriber.module'
					).then((m) => m.EditInsuranceSubscriberModule),
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
