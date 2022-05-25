import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CanDeactiveGuardService {
	modalStatus$: Subject<boolean> = new Subject<boolean>();
	modalChoice$: Subject<boolean> = new Subject<boolean>();
	constructor() {}
	openDialog() {
		this.modalStatus$.next(true);
	}
	closeDialog() {
		this.modalStatus$.next(false);
	}
	setChoice(val: boolean) {
		this.modalChoice$.next(val);
	}
}
