import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MenuBarService {
	compactSideMenuStatus: Subject<boolean> = new Subject<boolean>();
	constructor() {}
	compactSideMenu(val: boolean) {
		this.compactSideMenuStatus.next(val);
	}
}
