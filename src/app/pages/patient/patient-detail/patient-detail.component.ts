import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public navIndex: number = 0;
  idForm: FormGroup;
  @Input() formData: any | undefined = undefined;

  constructor(
    private fb: FormBuilder
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addId();
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


  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }


}
