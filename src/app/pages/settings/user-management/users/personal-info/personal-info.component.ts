import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  Form: FormGroup | undefined;
  @Input() formData: any | undefined = undefined;
  currentSelection: string = '';
  menuItems: MenuItem[] = [
    { title: 'Overview', id: 'overview' },
    { title: 'Profile', id: 'profile' },
    { title: 'Address', id: 'address' },
    { title: 'Contact', id: 'contact' },
    { title: 'Relations/Type', id: 'relationsType' },
    { title: 'Emergency Contact', id: 'emergencyContact' },
  ];

  letters = [{ "letter": "A", "status": "PRIMARY" },];
  user = {
    profile: {
      email: "",
      firstName: "",
      lastName: ""
    },
    roles: [],
  };

  constructor(private fb: FormBuilder,
    private userServ: UserService) { }

  ngOnInit(): void {
    this.initForm(this.formData);
    this.userServ.getUser().subscribe((resp: any) => {
      this.user = resp;
      console.log("userr in personalllllll", this.user);
    })
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
