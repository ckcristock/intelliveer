import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { CoorWithProspectComponent } from './coor-with-prospect.component';

const routes: Routes = [
  {
    path: '',
    component: CoorWithProspectComponent,
    children: [
      {
				path: '',
				redirectTo: 'callers-info',
				pathMatch: 'full'
			},
      {
				path: 'callers-info',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/callers-info/callers-info.module'
					).then((m) => m.CallersInfoModule)
			},
      {
				path: 'patient',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/patient/patient.module'
					).then((m) => m.PatientModule)
			},
      {
				path: 'lg-guardian',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/lg-guardian/lg-guardian.module'
					).then((m) => m.LgGuardianModule)
			},
      {
				path: 'dentist',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/dentist/dentist.module'
					).then((m) => m.DentistModule)
			},
      {
				path: 'referrer',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/referrer/referrer.module'
					).then((m) => m.ReferrerModule)
			},
      {
				path: 'insurance',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/insurance/insurance.module'
					).then((m) => m.InsuranceModule)
			},
      {
				path: 'family-members',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/family-members/family-members.module'
					).then((m) => m.FamilyMembersModule)
			},
			{
				path: 'family-members/additional-patient-2',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/family-members/additional-patient-two/additional-patient-two.module'
					).then((m) => m.AdditionalPatientTwoModule)
			},
			{
				path: 'family-members/additional-patient-3',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/family-members/additional-patient-three/additional-patient-three.module'
					).then((m) => m.AdditionalPatientThreeModule)
			},
			{
				path: 'family-members/additional-patient-4',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/family-members/additional-patient-four/additional-patient-four.module'
					).then((m) => m.AdditionalPatientFourModule)
			},
      {
				path: 'appointment',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/appointment/appointment.module'
					).then((m) => m.AppointmentModule)
			},
      {
				path: 'conclusion',
				loadChildren: () =>
					import(
						'@pages/home/add-patient/coor-with-prospect/conclusion/conclusion.module'
					).then((m) => m.ConclusionModule)
			},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoorWithProspectRoutingModule { }
