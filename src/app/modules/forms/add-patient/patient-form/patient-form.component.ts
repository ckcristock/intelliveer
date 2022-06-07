import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
  Form!: FormGroup;
  @Input() formData: any | undefined = undefined;
  @Input() tab: string = "";
  showButtonSaveCancel:boolean = false;
  openTextAreaVar:boolean = false;

  constructor(private router: Router, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  continueToLegalGuar(){
    if(this.tab=="coordWithProspect"){
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Patient");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[2].url]);

    } else if(this.tab=="quickAdd"){
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Patient");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[1].url]);
    }
  }

  
  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      practice: [data?.practice || ''],
      fName: [data?.fName || '', Validators.required],
      lName: [data?.lName || '', Validators.required],
      DOB: [data?.DOB || '', Validators.required],
      gender: [data?.gender || '']
    });
  }

  save(data: any)
  {
    console.log(data);
  }

  showButtonSaveCancelFunc(){
    this.showButtonSaveCancel = true;
  }

  closeSaveCancelFunc(){
    this.openTextAreaVar = false;
    this.showButtonSaveCancel = false;
  }

  openTextarea(){
    this.openTextAreaVar = true;
    this.showButtonSaveCancel = true;
  }

}
