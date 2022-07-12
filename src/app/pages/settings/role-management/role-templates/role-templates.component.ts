import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";
import { AlertService } from '@services/alert/alert.service';
import { RolesUsersService } from '@services/settings/role-management/roles-users.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-role-templates',
  templateUrl: './role-templates.component.html',
  styleUrls: ['./role-templates.component.scss']
})
export class RoleTemplatesComponent implements OnInit {

  // roleTemplates: any [] = [];
  roleTemplates:any;
  addRoute: string = "";
  selectedType:any;
  businessGroupDropdownSupscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | any;
  isSuperUser:boolean = false;
  constructor(private router: Router,
    private rolesUserServ: RolesUsersService,
    private alertService: AlertService,
    private _ngZone: NgZone,
    private authService: AuthService,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private globalRoutes: GlobalRoutesService) { 
      this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          console.log(bg)
          this.selectedBusinessGroup = bg;
          this.getOrgBgId();
        }
      });
    }

  ngOnInit(): void {
    this.addRoute = this.globalRoutes.getSettingsRoleManageRoutes()[0].child[0].url;
  }

  addRoleTemplate()
  {
    this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[0].child[0].url]);
  }
  editRoleTemplate(ID:any)
  {
    this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[0].child[1].url],{queryParams: {_id:ID}});
  }

  deleteRoleT(id:number){
    this.alertService.conformAlert('Are you sure?', 'You want to delete a role template')
    .then((result: any) => {
      if (result.value) {
    this.rolesUserServ.deleteRoleTemplateById(id).subscribe(res=>{
      this.alertService.success(
        'Success',
        'Role Template has been deleted successfully'
      );
      this._ngZone.run(() => { this.roleTemplateList() });
      
    }, error => {
      console.log(error)
    });
  }
});
  }

  roleTemplateList(){
    this.rolesUserServ.listRoleTemplate().subscribe(res=>{
      this.roleTemplates = res
    })
  }
  roleTemplateListByBGId(type:any,bgId:any){
    this.rolesUserServ.listRoleTemplateListByBGId(type,bgId).subscribe(res=>{
      this.roleTemplates = res
    })
  }
  /** Choose Type of Role Template */
  chooseTypes(e:any){
   this.selectedType = e.target.value;
   console.log(this.selectedType)
   this.getOrgBgId();
  }

  /** Show data According To Type and BG */
  getOrgBgId(){
		let user = this.authService.getLoggedInUser();
    this.isSuperUser = user?.__ISSU__;
    let bgOrdID:any = localStorage.getItem('selected_business_group');
    console.log(bgOrdID)
		if (user?.__ISSU__) {
       if(this.selectedType){
        this.roleTemplateListByBGId(this.selectedType,this.selectedBusinessGroup.bgId);
        this.selectedType = null;
       }else if(!this.selectedType && bgOrdID !='intelliveer' && bgOrdID !=null){
        this.isSuperUser = false;
         this.roleTemplateListByBGId('specific',this.selectedBusinessGroup.bgId)
       }else{
        this.roleTemplateList()
       }
		}else{
      this.isSuperUser = false;
			  this.roleTemplateListByBGId('specific',this.selectedBusinessGroup.bgId)
    }
	}
}
