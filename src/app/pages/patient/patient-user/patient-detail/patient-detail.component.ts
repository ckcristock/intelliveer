import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public navIndex: number = 0;
  idForm: FormGroup;
  @Input() formData: any | undefined = undefined;
  @Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
  Form!: FormGroup;

  interestsLst: any[] = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"];
  tagsLst: any[] = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"];
  tabsLst: any[] = [];

	currentSelection: string = '';
  menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Information', id: 'information' },
		{ title: 'Preferences', id: 'preferences' },
		{ title: 'Emergency Contact', id: 'emergencyContact' },
    { title: 'Ownership', id: 'ownership' },
		{ title: 'Notes', id: 'notes' },
	];
  userObj: any = {};
  legelEntityList: any;
  locationList: any;
  practiceList: any;
  businessGroupDropdownSupscription: any;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  globalData: any = {
    title: ""
  }
  pronouns: any[] = [
    { pronoun: 'He' },
    { pronoun: 'She' },
  ];

  constructor(
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private http: HttpClient,
    private userService: UserService,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private authService: AuthService
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
    this.businessGroupDropdownSupscription =
		this.businessGroupDropdownService
			.businessGroup()
			.subscribe((bg) => {
				if (bg) {
          this.selectedBusinessGroup = bg
					this.getOrgBgId();
				}
			});
  }

  ngOnInit(): void {
    this.tabsLst = [
      {
        tabTitleName: "Overview",
        tabTitleId: "overview"
      },
      {
        tabTitleName: "Profile",
        tabTitleId: "profile"
      },
      {
        tabTitleName: "Information",
        tabTitleId: "information"
      },
      {
        tabTitleName: "Preferences",
        tabTitleId: "preferences"
      },
      {
        tabTitleName: "Emergency Contact",
        tabTitleId: "emergencyContact"
      },
      {
        tabTitleName: "Notes",
        tabTitleId: "notes"
      }
    ];
    this.addId();
    this.initForm(this.formData);
    this.getStaticData();
    this.userObj = JSON.parse(localStorage.getItem('selectedPatient') || '');
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      title: [data?.title || ''],
      firstName: [data?.firstName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      DOB: [data?.DOB || '', Validators.required],
      gender: [data?.gender || '', Validators.required],
      pronoun: [data?.pronoun || ''],
      language: [data?.language || ''],
      maried: [data?.maried || ''],
      preferredName: [data?.preferredName || ''],
      pronounciation: [data?.pronounciation || ''],
      school: [data?.school || ''],
      interest: [data?.interest || ''],
      tags: [data?.tags || ''],
      location: [data?.location || ''],
      practice: [data?.practice || ''],
      provider: [data?.provider || ''],
      idNumber: [data?.idNumber || ''],
      idType: [data?.idType || ''],
      patientCoordinator: [data?.patientCoordinator || ''],
      treatmentCoordinator: [data?.treatmentCoordinator || ''],
      CSAssistant: [data?.CSAssistant || ''],
      cPerson: [data?.cPerson || ''],
      name: [data?.name || '', Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')],
      eContact: [data?.eContact || '', Validators.pattern("^[0-9]*$")],
      note: [data?.note || '']
    });
  }
  
  firstNameValid() {
    return this.Form.get('firstName')?.valid;
  }

  middleNameValid() {
    return this.Form.get('middleName')?.valid;
  }

  lastNameValid() {
    return this.Form.get('lastName')?.valid;
  }

  DOBValid() {
    return this.Form.get('DOB')?.value.length > 0;
  }

  genderValid() {
    return this.Form.get('gender')?.value.length > 0;
  }

  locationValid(){
    return this.Form.get('location')?.value.length > 0;
  }

  billingValid(){
    return this.Form.get('practice')?.value.length > 0;
  }

  treatingValid(){
    return this.Form.get('provider')?.value.length > 0;
  }

  contPersValid(){
    return this.Form.get('cPerson')?.value.length > 0;
  }

  emerNameValid(){
    return this.Form.get('name')?.value.length > 0  && this.Form.get('name')?.valid;
  }

  eContactValid(){
    return this.Form.get('eContact')?.value.length > 0 && this.Form.get('eContact')?.valid;
  }

  get ids(): FormArray {
    return this.idForm.get('info') as FormArray;
  }

  newId(): FormGroup {
    return this.fb.group({
      idType: '',
      idNumber: '',
    });
  }

  handleUploadedImage(e: { url: string }) {
    if (e && this.idForm) {
      this.idForm.controls['logo'].setValue(e.url);
    }
  }

  addId() {
    this.ids.push(this.newId());
  }

  removeId(i: number) {
    this.ids.removeAt(i);
  }

  save(data: any) {
		this.onSubmit.emit(data);
	}
	cancel() {
		this.onCancel.emit();
	}
  onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

  getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/global-data/static-types`)
      .subscribe({
        next: (data) => {
          this.globalData = data;
          console.log("this.globalData", this.globalData);
        },
        error: () => { },
        complete: () => { }
      });
  }
  getOrgBgId(){
		let bgOrdID:any = localStorage.getItem('selected_business_group');
		console.log(bgOrdID)
			let user = this.authService.getLoggedInUser();
			if (user?.__ISSU__) {
		  if(bgOrdID == 'intelliveer' || bgOrdID == null){
			this.getLegelEntityList('intelliveer');
			this.getLocationList('intelliveer');
			this.getPracticeList('intelliveer');
		  }else{
			this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
			this.getLocationList(this.selectedBusinessGroup?.bgId);
			this.getPracticeList(this.selectedBusinessGroup?.bgId);
		  }
		  }else{
		  this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
		  this.getLocationList(this.selectedBusinessGroup?.bgId);
		  this.getPracticeList(this.selectedBusinessGroup?.bgId);
		}
		}

  getLegelEntityList(bgId: any) {
		this.userService.getLegelEntityList(bgId).subscribe(
			(list: any) => {
				console.log(list);
				this.legelEntityList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getLocationList(bgId: any) {
		this.userService.getLocationList(bgId).subscribe(
			(list: any) => {
				console.log(list);
				this.locationList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getPracticeList(bgId: any) {
		this.userService.getPracticeList(bgId).subscribe(
			(list: any) => {
				console.log(list);
				this.practiceList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}



}
