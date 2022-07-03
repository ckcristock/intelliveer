import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "@services/user/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  Form!: FormGroup;
  @Input() formData: any | undefined = undefined;
  //user = { firstName: '', lastName: '', email: '', password: '', roles:'' };
  userEmail: any = "";
  user = {
    creds: {
      "email": "",
      "password": ""
    },
    profile: {
      "firstName": "",
      "lastName": "",
      "email": ""
    },
    roles: []
  };
  roles: any[] = [];

  constructor(private router: Router,
    private fb: FormBuilder,
    private userServ: UserService) { }

  ngOnInit(): void {
    this.initForm(this.formData);
    this.userServ.getRoles().subscribe((resp: any) => {
      this.roles = resp;
    });
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      userEmail: [data?.userEmail || '', Validators.required],
      password: [data?.password || '', Validators.required],
      userRoles: [data?.userRoles || '', Validators.required],
    });
  }

  save(data: any) {
    console.log(data);
  }

  saveUser() {
    this.user.creds.email = this.userEmail;
    this.user.profile.email = this.userEmail;
    this.userServ.pushManageUser(this.user).subscribe((resp: any) => {
      this.userServ.refreshUsers();
      this.router.navigate(['/dashboard/settings/user-management/manage-user']);
    });
  }
}
