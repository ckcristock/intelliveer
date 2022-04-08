import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      {
        path: '',
        redirectTo: 'business-group',
        pathMatch: 'full',
      },
      {
        path: 'business-group',
        loadChildren: () =>
          import('@pages/onboarding/business-group/business-group.module').then(
            (m) => m.BusinessGroupModule
          ),
      },
      {
        path: 'business-group/add',
        loadChildren: () =>
          import(
            '@pages/onboarding/business-group/add-business-group/add-business-group.module'
          ).then((m) => m.AddBusinessGroupModule),
      },
      {
        path: 'business-group/edit/:id',
        loadChildren: () =>
          import(
            '@pages/onboarding/business-group/edit-business-group/edit-business-group.module'
          ).then((m) => m.EditBusinessGroupModule),
      },
      {
        path: 'legal-entity',
        loadChildren: () =>
          import('@pages/onboarding/legal-entity/legal-entity.module').then(
            (m) => m.LegalEntityModule
          ),
      },
      {
        path: 'legal-entity/add',
        loadChildren: () =>
          import(
            '@pages/onboarding/legal-entity/add-legal-entity/add-legal-entity.module'
          ).then((m) => m.AddLegalEntityModule),
      },
      {
        path: 'legal-entity/edit/:id',
        loadChildren: () =>
          import(
            '@pages/onboarding/legal-entity/edit-legal-entity/edit-legal-entity.module'
          ).then((m) => m.EditLegalEntityModule),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('@pages/onboarding/location/location.module').then(
            (m) => m.LocationModule
          ),
      },
      {
        path: 'location/add',
        loadChildren: () =>
          import(
            '@pages/onboarding/location/add-location/add-location.module'
          ).then((m) => m.AddLocationModule),
      },
      {
        path: 'location/edit/:id',
        loadChildren: () =>
          import(
            '@pages/onboarding/location/edit-location/edit-location.module'
          ).then((m) => m.EditLocationModule),
      },
      {
        path: 'practice',
        loadChildren: () =>
          import('@pages/onboarding/practice/practice.module').then(
            (m) => m.PracticeModule
          ),
      },
      {
        path: 'practice/add',
        loadChildren: () =>
          import(
            '@pages/onboarding/practice/add-practice/add-practice.module'
          ).then((m) => m.AddPracticeModule),
      },
      {
        path: 'practice/edit/:id',
        loadChildren: () =>
          import(
            '@pages/onboarding/practice/edit-practice/edit-practice.module'
          ).then((m) => m.EditPracticeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
