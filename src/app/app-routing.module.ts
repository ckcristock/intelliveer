import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@pages/common/page-not-found/page-not-found.component';
import { AuthGuard } from '@services/auth/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{
		path: 'dashboard',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('@pages/dashboard/dashboard.module').then(
				(m) => m.DashboardModule
			),
	},
	{
		path: '**',
		loadChildren: () =>
			import('@pages/common/page-not-found/page-not-found.module').then(
				(e) => e.PageNotFoundModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
