import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from '@guards/role-based/role-guard.guard';
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
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_RETRIEVE_BUSINESS_GROUP",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/business-group/business-group.module'
					).then((m) => m.BusinessGroupModule),
			},
			{
				path: 'business-group/add',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_CREATE_BUSINESS_GROUP",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/business-group/add-business-group/add-business-group.module'
					).then((m) => m.AddBusinessGroupModule),
			},
			{
				path: 'business-group/edit/:id',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_EDIT_BUSINESS_GROUP",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/business-group/edit-business-group/edit-business-group.module'
					).then((m) => m.EditBusinessGroupModule),
			},
			{
				path: 'legal-entity',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_RETRIEVE_LEGAL_ENTITY",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/legal-entity/legal-entity.module'
					).then((m) => m.LegalEntityModule),
			},
			{
				path: 'legal-entity/add',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_CREATE_LEGAL_ENTITY",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/legal-entity/add-legal-entity/add-legal-entity.module'
					).then((m) => m.AddLegalEntityModule),
			},
			{
				path: 'legal-entity/edit/:id',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_EDIT_LEGAL_ENTITY",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/legal-entity/edit-legal-entity/edit-legal-entity.module'
					).then((m) => m.EditLegalEntityModule),
			},
			{
				path: 'location',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_RETRIEVE_LOCATION",
				  },
				loadChildren: () =>
					import('@pages/settings/onboarding/location/location.module').then(
						(m) => m.LocationModule
					),
			},
			{
				path: 'location/add',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_CREATE_LOCATION",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/location/add-location/add-location.module'
					).then((m) => m.AddLocationModule),
			},
			{
				path: 'location/edit/:id',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_EDIT_LOCATION",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/location/edit-location/edit-location.module'
					).then((m) => m.EditLocationModule),
			},
			{
				path: 'practice',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_RETRIEVE_PRACTICE",
				  },
				loadChildren: () =>
					import('@pages/settings/onboarding/practice/practice.module').then(
						(m) => m.PracticeModule
					),
			},
			{
				path: 'practice/add',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_CREATE_PRACTICE",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/practice/add-practice/add-practice.module'
					).then((m) => m.AddPracticeModule),
			},
			{
				path: 'practice/edit/:id',
				// canActivate: [RoleGuardGuard],
				data:{
					isEnabled: true,
					value: "CAN_EDIT_PRACTICE",
				  },
				loadChildren: () =>
					import(
						'@pages/settings/onboarding/practice/edit-practice/edit-practice.module'
					).then((m) => m.EditPracticeModule),
			},
			{
				path: 'mapping',
				loadChildren: () =>
					import('@pages/settings/onboarding/mapping/mapping.module').then(
						(m) => m.MappingModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class OnboardingRoutingModule {}
