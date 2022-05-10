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
    this.addId();
    this.initForm(this.formData);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      title: [data?.title || '', Validators.required],
      firstName: [data?.firstName || '', Validators.required],
      middleName: [data?.middleName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      DOB: [data?.DOB || '', Validators.required],
      gender: [data?.gender || '', Validators.required],
      pronoun: [data?.pronoun || '', Validators.required],
      language: [data?.language || '', Validators.required],
      maried: [data?.maried || '', Validators.required],
      preferredName: [data?.preferredName || '', Validators.required],
      pronounciation: [data?.pronounciation || '', Validators.required],
      school: [data?.school || '', Validators.required],
      interest: [data?.interest || '', Validators.required],
      tags: [data?.tags || '', Validators.required],
      location: [data?.location || '', Validators.required],
      practice: [data?.practice || '', Validators.required],
      provider: [data?.provider || '', Validators.required],
      patientCoordinator: [data?.patientCoordinator || '', Validators.required],
      treatmentCoordinator: [data?.treatmentCoordinator || '', Validators.required],
      CSAssistant: [data?.CSAssistant || '', Validators.required],
      cPerson: [data?.cPerson || '', Validators.required],
      name: [data?.name || '', Validators.required],
      eContact: [data?.eContact || '', Validators.required],
      note: [data?.note || '', Validators.required]
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


  scroll(el: HTMLElement, selectTab: string) {
    this.selectTab = selectTab.trim();
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }


}
