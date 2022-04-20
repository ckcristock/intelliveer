import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-party',
  templateUrl: './payment-party.component.html',
  styleUrls: ['./payment-party.component.scss']
})
export class PaymentPartyComponent implements OnInit {

  @Input() formData: any | undefined = undefined;
  idForm: FormGroup;
  Form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required],
      abbreviation: [data?.abbreviation || '', Validators.required],
      logo: [data?.logo || 'null']
    });
  }

  handleUploadedImage(e: { url: string }) {
    if (e && this.idForm) {
      this.idForm.controls['logo'].setValue(e.url);
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}
