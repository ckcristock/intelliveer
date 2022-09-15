import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';

@Component({
  selector: 'app-orthodontic-form',
  templateUrl: './orthodontic-form.component.html',
  styleUrls: ['./orthodontic-form.component.scss']
})
export class OrthodonticFormComponent implements OnInit {

	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	Form: FormGroup | undefined;
  currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Eligibility', id: 'eligibility' },
		{ title: 'COB/Assignment', id: 'cob' },
		{ title: 'Deductible', id: 'deductible' },
		{ title: 'Benefits', id: 'benefits' },
		{ title: 'Pre-authorization', id: 'authorization' },
		{ title: 'Billing & Payments', id: 'bandp' }
	];
	paymentSelect: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
	this.initForm(this.formData);
  }

  initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			name: [data?.name || ''],
			planType: [data?.planType || ''],
			electronicId: [data?.electronicId || ''],
			feeScheduleOffice: [data?.feeScheduleOffice || ''],
      feeScheduleInsurance: [data.feeScheduleInsurance || ''],
      feeScheduleCoPay: [data.feeScheduleCoPay || ''],
      emailId: [data?.emailId || '' ],
      primaryPhoneType: [data?.primaryPhoneType || ''],
      primaryPhoneNumber: [data?.primaryPhoneNumber || ''],
      secondaryPhoneType: [data?.secondaryPhoneType || ''],
      secondaryPhoneNumber: [data?.secondaryPhoneNumber || ''],
      primaryPreferredCommunicationMethod: [data?.primaryPreferredCommunicationMethod || '',],
      secondaryPreferredCommunicationMethod: [data?.secondaryPreferredCommunicationMethod || ''],
      website: [data?.website || ''],
      fax: [data?.fax || ''],
      username: [data.username || ''],
      password: [data.password || ''],
      note: [data?.note || '']
		});
	}

  onSectionChange(sectionId: any) {
		this.currentSelection = sectionId;
	}

  save(data: any) {
    console.log(data);
		this.onSubmit.emit(data);
	}
	cancel() {
		this.onCancel.emit();
	}

}
