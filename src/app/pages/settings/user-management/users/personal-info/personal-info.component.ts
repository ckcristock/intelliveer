import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
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

  testCounter: number = 0;

  letters = [{ "letter": "A", "status": "PRIMARY" },];
  // user2:any []=[];
  user:any = {
    _id: 0,
    profile: {
      email: "",
      firstName: "",
      lastName: "",
      _id: 0,
    },
    roles: [],
  };

  userProfile = {
    firstName: "",
    lastName: "",
    email: "",
  }

  userRoles = {
    roles: []
  }


  constructor(private router: Router,
    private globalRoutes: GlobalRoutesService,
    private fb: FormBuilder,
    private userServ: UserService) { }

  ngOnInit(): void {

    this.initForm(this.formData);

    this.user= this.userServ.getUser();
    console.log("user", this.user);
    if(this.user._id == null){
      this.router.navigate([this.globalRoutes.getSettingsUserManageRoutes()[0].url]);
    }
    
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
    this.userProfile = this.user.profile;
    this.userProfile = {
      firstName: this.user.profile.firstName,
      lastName: this.user.profile.lastName,
      email: this.user.profile.email,
    }
    this.userServ.updateUserProfile(this.userProfile, this.user._id).subscribe((resp: any) => {
      console.log("update Resp", resp);
      this.router.navigate([this.globalRoutes.getSettingsUserManageRoutes()[0].url]);
    });
  }
  cancel() {
    // this.onCancel.emit();
  }

  onSectionChange(sectionId: string) {
    this.currentSelection = sectionId;
  }

}
