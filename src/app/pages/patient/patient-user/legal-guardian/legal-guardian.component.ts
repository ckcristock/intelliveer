import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientUserService } from "@services/dashboard/patient/patient-user/patient-user.service";
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";


@Component({
  selector: 'app-legal-guardian',
  templateUrl: './legal-guardian.component.html',
  styleUrls: ['./legal-guardian.component.scss']
})
export class LegalGuardianComponent implements OnInit {

  form: FormGroup;
  searchFocus: boolean = false;
  showSelectedPatient: boolean = false;
	selectedPatient: any;
  showList: boolean = false;
  showRelationList: boolean = false;
	searchResults: any = [
		{ user: 'Smith John', dob: '30/12/1984', active: true, id: 'P001' },
		{ user: 'Smith Doe', dob: '23/08/1988', active: true, id: 'P002' },
		{ user: 'Smith Walker', dob: '12/06/1994', active: false, id: 'P002' },
	];

  legalGuardianList: any[] = [];
  patientList: any[] = [];
  searchWord: string = "";
  relationships: any [] = [
    {id:0, value:"Father"},
    {id:1, value:"Mother"},
    {id:2, value:"Sister"},
    {id:3, value:"Brother"},
  ];

  constructor(private router: Router,
    private patientUserServ: PatientUserService,
    private globalRoutes: GlobalRoutesService,
    private fb: FormBuilder) {
    this.form =  this.fb.group({
      relationship:[''],
    });
   }

  ngOnInit(): void {
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

  addAsLegalGuardian()
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
    this.legalGuardianList.push(obj);
  }

  gotoDetails(data: any) {
    this.router.navigate(['/dashboard/patient/patient-user/legal-guardian/add'])
  }

  goToAddLegalGuard(){
    console.log("Form", this.form);
    console.log("to seeeeee", this.form.value.relationship);
    
    this.patientUserServ.setLegalGuardToPati(this.form.value.relationship);
    this.router.navigate([this.globalRoutes.getPatientUserRoutes()[1].child[0].url]);
  }

}
