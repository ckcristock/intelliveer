import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insurance-group-information-form',
  templateUrl: './insurance-group-information-form.component.html',
  styleUrls: ['./insurance-group-information-form.component.scss']
})
export class InsuranceGroupInformationFormComponent implements OnInit {

	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	Form: FormGroup | undefined;
  currentSelection: string = '';
	menuItems: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm(this.formData);
    }
  
    initForm(data?: any) {
      data = data || {};
      this.Form = this.fb.group({
        groupNumber: [data?.groupNumber || ''],
        groupName: [data?.groupName || '']
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
