import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-policy',
  templateUrl: './user-policy.component.html',
  styleUrls: ['./user-policy.component.scss']
})
export class UserPolicyComponent implements OnInit {

  Form!: FormGroup;
  formData: any | undefined = undefined;
  showAdvanceBG: boolean = true;
  showAdvanceLE: boolean = true;
  showAdvanceLOC: boolean = true;
  showAdvancePC: boolean = true;

  roles: any [] = [
    {name: "Role 1"},
    {name: "Role 2"},
    {name: "Role 3"},
    {name: "Role 4"},
    {name: "Role 5"},
  ];

  permissionsBG: any [] = [
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
  ];

  permissionsLE: any [] = [
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
  ];

  permissionsLOC: any [] = [
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
  ];

  permissionsPC: any [] = [
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
  ];

  constructor(private router: Router,
    private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      roletemplate: [data?.roletemplate || 'yes'],
      name: [data?.fName || '', Validators.required],
      description: [data?.lName || ''],
      permissions: this.fb.array([])
    });
  }

  save(data: any) {
   
  }

  cancel() {
  }

  showAdvBG(){
    this.showAdvanceBG = !this.showAdvanceBG;
  }

  showAdvLE(){
    this.showAdvanceLE = !this.showAdvanceLE;
  }

  showAdvLOC(){
    this.showAdvanceLOC = !this.showAdvanceLOC;
  }

  showAdvPC(){
    this.showAdvancePC = !this.showAdvancePC;
  }


}
