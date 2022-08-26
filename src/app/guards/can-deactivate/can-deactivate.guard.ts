import { Injectable, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanDeactivate,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { CanDeactiveGuardService } from '@services/can-deactive-guard/can-deactive-guard.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { map, Observable, first, take, of } from 'rxjs';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard
	implements OnInit, CanActivate, CanDeactivate<CanComponentDeactivate>
{
	conditions: any[] = [];
	constructor(private canDeactivateRouteService: CanDeactiveGuardService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private patientUserServ: PatientUserService
		) { }

	ngOnInit(): void {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return true;
	}
	canDeactivate(
		component: CanComponentDeactivate,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {

		this.conditions = [];
		
		this.addPatientServ.setConditions();
		this.insuranceServ.setConditions();
		this.onboardingServ.setConditions();
		this.patientUserServ.setConditions();
		this.conditions = this.addPatientServ.getConditions();
		this.conditions.push(...this.insuranceServ.getConditions());
		this.conditions.push(...this.onboardingServ.getConditions());
		this.conditions.push(...this.patientUserServ.getConditions());

		console.log("this.conditions", this.conditions);

		for (let i = 0; i < this.conditions.length; i++) {
			if (this.conditions[i].condition) {
				this.canDeactivateRouteService.openDialog();
				return this.canDeactivateRouteService.modalChoice$;
			}
		}
		return true;
	}
}
