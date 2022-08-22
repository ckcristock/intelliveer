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
		private addPatientServ: AddPatientService,) { }

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
		// For Add Patient Module
		this.addPatientServ.setConditions();
		this.conditions = this.addPatientServ.getConditions();
		// End Add Patient Module

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
