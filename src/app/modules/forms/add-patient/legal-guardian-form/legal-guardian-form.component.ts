import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-legal-guardian-form',
  templateUrl: './legal-guardian-form.component.html',
  styleUrls: ['./legal-guardian-form.component.scss']
})
export class LegalGuardianFormComponent implements OnInit {

  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
  Form!: FormGroup;
  @Input() formData: any | undefined = undefined;
  @Input() tab: string = "";

  constructor(private router: Router, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  continueToDentist(){
    if(this.tab=="coordWithProspect"){
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Legal Guardian");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[3].url]);

    } else if(this.tab=="quickAdd"){
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Legal Guardian");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[2].url]);
    }
    
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      lName: [data?.lName || '', Validators.required],
      lgName: [data?.lgName || '', Validators.required],
    });
  }

  save(data: any)
  {
    console.log(data);
  }

}
