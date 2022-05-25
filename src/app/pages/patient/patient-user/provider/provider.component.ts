import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  searchFocus: boolean = false;
  showSelectedPatient: boolean = false;
	selectedPatient: any;
  showList: boolean = false;
	searchResults: any = [
		{ user: 'Smith John', dob: '30/12/1984', active: true, id: 'P001' },
		{ user: 'Smith Doe', dob: '23/08/1988', active: true, id: 'P002' },
		{ user: 'Smith Walker', dob: '12/06/1994', active: false, id: 'P002' },
	];

  providerList: any[] = [];
  patientList: any[] = [];
  searchWord: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patientList = this.searchResults
  }

  handleSearchResultsClick(patient: any) {
    console.log(patient);
		if (patient.active) {
			this.searchFocus = false;
			this.showSelectedPatient = true;
			this.selectedPatient = patient;
      this.searchWord = patient.user
		}
	}

  fetchSearch($event: any): void
  {
    if ($event.target.value === '') {
      console.log("fgggggggggggggggggggg")
      console.log(this.searchResults);
      console.log(this.patientList)
      // return this.searchResults = [];
    }
    this.searchResults = this.patientList.filter((paitent: any) => {
      return paitent.user.toLowerCase().startsWith($event.target.value.toLowerCase());
    })
  }

  addAsProvider()
  {
    let obj = {
      image: "",
      user: this.selectedPatient.user,
      practiceName: "Practice Name",
      specialty: "Specialty",
      pemail: "abc@gmail.com",
      phone: "8484848484",
      email: "abcd@gmail.com",
      mutualPatient: "5"
    }
    this.providerList.push(obj);
  }

  gotoDetails(data: any) {
    this.router.navigate(['/dashboard/patient/patient-user/provider/add'])
  }

}
