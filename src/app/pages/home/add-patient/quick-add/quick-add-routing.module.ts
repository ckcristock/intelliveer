import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickAddComponent } from './quick-add.component';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: QuickAddComponent,
	canDeactivate: [CanDeactivateGuard],
    children: [
      {
				path: '',
				redirectTo: 'quick-add-patient',
				pathMatch: 'full'
			},
      {
				path: 'quick-add-patient',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/quick-add/quick-add-patient/quick-add-patient.module'
					).then((m) => m.QuickAddPatientModule)
			},
      {
				path: 'lg-guardian',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/quick-add/lg-guardian/lg-guardian.module'
					).then((m) => m.LgGuardianModule)
			},
      {
				path: 'dentist',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/quick-add/dentist/dentist.module'
					).then((m) => m.DentistModule)
			},
      {
				path: 'referrer',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/quick-add/referrer/referrer.module'
					).then((m) => m.ReferrerModule)
			},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickAddRoutingModule { }
