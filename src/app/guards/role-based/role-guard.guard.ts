import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GlobalRoutesCheckService } from '@services/global-routes-check/global-routes-check.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private checkPermission: GlobalRoutesCheckService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAtuhorized(route);
  }
  private  isAtuhorized(route: ActivatedRouteSnapshot): boolean {
   let roles:any = localStorage.getItem('permissionSet')
   roles = JSON.parse(roles);
   let expectedRoles = route.data;
   let matchValue:any
   if(roles.__ISSU__){
    matchValue = true
   }else{
    roles.roles.forEach((permission:any) => {
      permission.permissions.forEach((module:any) => {
        module.sections.forEach((sections:any) => {
          sections.permissions.filter((role:any) => {
            this.checkPermission.checkRoutePermissions(module.module,role);
            if(role.name == expectedRoles['value']){
              matchValue = role.enabled;
              console.log(role)
            }else{
              matchValue = true
            }
          } )
        });
      });
     });
   }
   return matchValue == true ? true : false;
  }
  
}
