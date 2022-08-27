import { Injectable } from '@angular/core';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalRoutesCheckService {

  constructor(private globalRoutes: GlobalRoutesService) { }

  checkRoutePermissions(module:any,perm:any){
    console.log(module,perm)
    switch (module) {
      case 'ROLES':
        this.rolesManagement(perm)
        break;
      case 'ROLE_TEMPLATES':
        this.rolesTemplate(perm)
        break;
      case 'USERS':
        this.usersManagement(perm)
        break;
      case 'ORG_ONBOARDING':
        this.orgOnBording(perm)
        break;
      case 'PATIENT_CHART_[FAMILY] ':
        let patientChart = this.globalRoutes.getCoordWithProspRoutes();
        break;
    }
  }
  /** Org Onboarding */
  orgOnBording(perm:any){
    let onboarding = this.globalRoutes.getSettingsOnboardingRoutes();
    let onboardingSearchString =   this.transform('value',onboarding,perm.name);
    if(onboardingSearchString.length > 0){
      onboardingSearchString[0].isEnabled = perm.enabled;
    }else{
      onboarding.forEach((child:any)=>{
        const childPermission = this.transform('value',child.child,perm.name);
        if(childPermission.length == 1){
        childPermission[0].isEnabled = perm.enabled;
        }
      })
    }
  }
   /** Role Management */
   rolesManagement(perm:any){
    let roles = this.globalRoutes.getSettingsRoleManageRoutes();
    let rolesSearchString =   this.transform('value',roles,perm.name);
    if(rolesSearchString.length > 0){
      rolesSearchString[0].isEnabled = perm.enabled;
    }else{
      roles.forEach((child:any)=>{
        const childPermission = this.transform('value',child.child,perm.name);
        if(childPermission.length == 1){
        childPermission[0].isEnabled = perm.enabled;
        }
      })
    }
  }
  /** Role Template */
  rolesTemplate(perm:any){
    let rolesTemplate = this.globalRoutes.getSettingsRoleManageRoutes();
    let rolesTemplateSearchString =   this.transform('value',rolesTemplate,perm.name);
    if(rolesTemplateSearchString.length > 0){
      rolesTemplateSearchString[0].isEnabled = perm.enabled;
    }else{
      rolesTemplate.forEach((child:any)=>{
        const childPermission = this.transform('value',child.child,perm.name);
        if(childPermission.length == 1){
        childPermission[0].isEnabled = perm.enabled;
        }
      })
    }
  }
  /** Users Management */
  usersManagement(perm:any){
    let users = this.globalRoutes.getSettingsUserManageRoutes();
    let usersSearchString =   this.transform('value',users,perm.name);
    if(usersSearchString.length > 0){
      usersSearchString[0].isEnabled = perm.enabled;
    }else{
      users.forEach((child:any)=>{
        const childPermission = this.transform('value',child.child,perm.name);
        if(childPermission.length == 1){
        childPermission[0].isEnabled = perm.enabled;
        }
      })
    }
  }
  /** Patient Chart Family */
  patientChartFamily(perm:any){
    let onboarding = this.globalRoutes.getSettingsOnboardingRoutes();
    let onboardingSearchString =   this.transform('value',onboarding,perm.name);
    if(onboardingSearchString.length > 0){
      onboardingSearchString[0].isEnabled = perm.enabled;
    }else{
      onboarding.forEach((child:any)=>{
        const childPermission = this.transform('value',child.child,perm.name);
        if(childPermission.length == 1){
        childPermission[0].isEnabled = perm.enabled;
        }
      })
    }
  }
  /** Filter data */
  transform(parm:any,items: any, term: any): any {
    if (term === undefined) {
      return items;
    }
    if(parm){
      return items.filter((item:any) =>
       
          item[parm] != null &&
          item[parm]
            .toString()
            .toLowerCase()
            .includes(term.toLowerCase())
      
    );
    }
    }
}
