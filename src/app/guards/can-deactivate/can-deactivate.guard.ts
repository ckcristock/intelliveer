import { Injectable, ViewChild, ViewChildren } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanDeactivate,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { CanDeactiveGuardService } from '@services/can-deactive-guard/can-deactive-guard.service';
import { map, Observable, first, take, of } from 'rxjs';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard
	implements CanActivate, CanDeactivate<CanComponentDeactivate>
{
	constructor(private canDeactivateRouteService: CanDeactiveGuardService) {}
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
		this.canDeactivateRouteService.openDialog();
		return this.canDeactivateRouteService.modalChoice$;
	}
}
