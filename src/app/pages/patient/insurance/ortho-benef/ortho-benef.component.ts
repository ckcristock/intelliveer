import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';

@Component({
  selector: 'app-ortho-benef',
  templateUrl: './ortho-benef.component.html',
  styleUrls: ['./ortho-benef.component.scss']
})
export class OrthoBenefComponent implements OnInit {

  Form: FormGroup | undefined;
  @Input() formData: any | undefined = undefined;
  currentSelection: string = '';
  menuItems: MenuItem[] = [
		{ title: 'Eligibility', id: 'eligibility' },
		{ title: 'COB/Assignment', id: 'cobaddig' },
		{ title: 'Deductible', id: 'deductible' },
		{ title: 'Benefits', id: 'benefits' },
		{ title: 'Pre-authorization ', id: 'preauth' },
		{ title: 'BIlling & Payments', id: 'billingpaym' },
	];
  years:any [] = [
    {id:1, name:"Calendar"},
    {id:2, name:"Fiscal"}
  ];
  selectedYear:any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			check1: [data?.check1 || '', Validators.required],
			check2: [data?.check2 || '', Validators.required],
		});
	}
  
  save(data: any) {
		// this.onSubmit.emit(data);
	}
	cancel() {
		// this.onCancel.emit();
	}

  onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}
}


