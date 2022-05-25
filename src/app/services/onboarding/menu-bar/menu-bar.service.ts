import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {

  constructor() { }
  private menuItems = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Physical Address', id: 'physicalAddress' },
		{ title: 'Mailing Address', id: 'mailingAddress' },
		{ title: 'Insurance ', id: 'insuranceBillingAddress' },
		{ title: 'Contact', id: 'contactDetails' },
		{ title: 'Contact Person Info', id: 'contactPerson' }
	];

  getMenu(){
    return this.menuItems;
  }
}
