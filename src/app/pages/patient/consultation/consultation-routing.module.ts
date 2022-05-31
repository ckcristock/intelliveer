import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './consultation.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultationComponent,
    children: [
      {
        path: '',
        redirectTo: 'health-history',
        pathMatch: 'full',
      },
      {
        path: 'health-history',
        loadChildren: () =>
          import('@pages/patient/consultation/health-history/health-history.module').then(
            (m) => m.HealthHistoryModule
          ),
      },
      {
        path: 'health-history/add',
        loadChildren: () =>
          import(
            '@pages/patient/consultation/health-history/add-health-history/add-health-history.module').then(
              (m) => m.AddHealthHistoryModule
            ),
      },
      {
        path: 'provider/add',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/provider/add-provider/add-provider.module').then(
              (m) => m.AddProviderModule
            ),
      },
			{
				path: 'provider/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/patient-user/provider/edit-provider/edit-provider.module'
					).then((m) => m.EditProviderModule),
			},
      {
        path: 'referer',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/referer/referer.module').then(
              (m) => m.RefererModule
            ),
      },
      {
        path: 'referer/add',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/referer/add-referer/add-referer.module').then(
              (m) => m.AddRefererModule
            ),
      },
			{
				path: 'referer/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/patient-user/referer/edit-referer/edit-referer.module'
					).then((m) => m.EditRefererModule),
			},
      {
        path: 'family_members',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/family-member/family-member.module').then(
              (m) => m.FamilyMemberModule
            ),
      },
      {
        path: 'family_members/add',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/family-member/add-family-member/add-family-member.module').then(
              (m) => m.AddFamilyMemberModule
            ),
      },
			{
				path: 'family_members/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/patient-user/family-member/edit-family-member/edit-family-member.module'
					).then((m) => m.EditFamilyMemberModule),
			},
      {
        path: 'legal-guardian',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/legal-guardian/legal-guardian.module').then(
              (m) => m.LegalGuardianModule
            ),
      },
      {
        path: 'legal-guardian/add',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/legal-guardian/add-legal-guardian/add-legal-guardian.module').then(
              (m) => m.AddLegalGuardianModule
            ),
      },
      {
        path: 'legal-guardian/edit/:id',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/legal-guardian/edit-legal-guardian/edit-legal-guardian.module').then(
              (m) => m.EditLegalGuardianModule
            ),
      },
      {
        path: 'payment-party',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/payment-party/payment-party.module').then(
              (m) => m.PaymentPartyModule
            ),
      },
      {
        path: 'payment-party/add',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/payment-party/add-payment-party/add-payment-party.module').then(
              (m) => m.AddPaymentPartyModule
            ),
      },
      {
        path: 'payment-party/edit/:id',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/payment-party/edit-payment-party/edit-payment-party.module').then(
              (m) => m.EditPaymentPartyModule
            ),
      },
      {
        path: 'insurance-subscriber',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/insurance-subscriber/insurance-subscriber.module').then(
              (m) => m.InsuranceSubscriberModule
            ),
      },
      {
        path: 'insurance-subscriber/add',
        loadChildren: () =>
          import(
            '@pages/patient/patient-user/insurance-subscriber/add-insurance-subscriber/add-insurance-subscriber.module').then(
              (m) => m.AddInsuranceSubscriberModule
            ),
      },
			{
				path: 'insurance-subscriber/edit/:id',
				loadChildren: () =>
					import(
						'@pages/patient/patient-user/insurance-subscriber/edit-insurance-subscriber/edit-insurance-subscriber.module'
					).then((m) => m.EditInsuranceSubscriberModule),
			}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationRoutingModule {}
