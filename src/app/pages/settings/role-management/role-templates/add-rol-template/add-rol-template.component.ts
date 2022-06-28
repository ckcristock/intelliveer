import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolesUsersService } from '@services/roles-users/roles-users.service';

@Component({
  selector: 'app-add-rol-template',
  templateUrl: './add-rol-template.component.html',
  styleUrls: ['./add-rol-template.component.scss']
})
export class AddRolTemplateComponent implements OnInit {

  Form!: FormGroup;
  @Input() formData: any | undefined = undefined;
  roleTemplate = { id: '', name: '', description: '' };

  permissions: any = [
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" },
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" },
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" },
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" },
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" },
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" },
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" },
  ];

  constructor(private router: Router,
    private rolesUserServ: RolesUsersService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      roleName: [data?.fName || '', Validators.required],
      roleDescrip: [data?.lName || '', Validators.required],
    });
  }

  save(data: any) {
    console.log(data);
  }

  saveRoleTemplate() {
    this.rolesUserServ.pushRoleTemplate(this.roleTemplate);
    this.router.navigate(['/dashboard/settings/role-management/manage-role-template']);
  }

}
