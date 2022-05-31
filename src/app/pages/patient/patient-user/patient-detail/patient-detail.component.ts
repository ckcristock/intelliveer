import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressFormService } from '@services/forms/address-form/address-form.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public navIndex: number = 0;
  idForm: FormGroup;
  @Input() formData: any | undefined = undefined;
  Form!: FormGroup;
  selectTab: string = "overview";

  interestsLst: any[] = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"];
  tagsLst: any[] = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"];
  tabsLst: any[] = [];

  constructor(
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
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
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      title: [data?.title || ''],
      firstName: [data?.firstName || '', Validators.required],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', Validators.required],
      DOB: [data?.DOB || '', Validators.required],
      gender: [data?.gender || ''],
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
      name: [data?.name || ''],
      eContact: [data?.eContact || ''],
      note: [data?.note || '']
    });
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

  save(data: any)
  {
    console.log(data);
  }

  scroll(el: HTMLElement, selectTab: string) {
    this.selectTab = selectTab.trim();
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  selectedTab($event: any)
  {
    console.log($event);
    document.getElementById($event)?.scrollIntoView();
  }


}
