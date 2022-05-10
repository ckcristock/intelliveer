import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceComponent } from './insurance.component';

const routes: Routes = [
  {
    path: '',
    component: InsuranceComponent,
    children: [
      {
        path: '',
        redirectTo: 'active',
        pathMatch: 'full',
      },
      {
        path: 'active',
        loadChildren: () =>
          import(
            '@pages/patient/insurance/active/active.module').then(
              (m) => m.ActiveModule
            ),
      },
      {
        path: 'policy-info',
        loadChildren: () =>
          import(
            '@pages/patient/insurance/policy-info/policy-info.module').then(
              (m) => m.PolicyInfoModule
            ),
      },
      {
        path: 'ortho-benef',
        loadChildren: () =>
          import(
            '@pages/patient/insurance/ortho-benef/ortho-benef.module').then(
              (m) => m.OrthoBenefModule
            ),
      },
      {
        path: 'dental-benef',
        loadChildren: () =>
          import(
            '@pages/patient/insurance/dental-benef/dental-benef.module').then(
              (m) => m.DentalBenefModule
            ),
      },
      {
        path: 'billing',
        loadChildren: () =>
          import(
            '@pages/patient/insurance/billing/billing.module').then(
              (m) => m.BillingModule
            ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
