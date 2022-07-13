import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesUsersService {

  private roleTemplatesCounter: number = 0;
  private roleTemplates: any [] = [];
  private roleTemplates$: BehaviorSubject<any []> = new BehaviorSubject<any>([]);

  private rolesCounter: number = 0;
  private roles: any [] = [];
  private roles$: BehaviorSubject<any []> = new BehaviorSubject<any>([]);
  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  pushRoleTemplate(roleTemplate: any){
    this.roleTemplatesCounter++;
    roleTemplate.id=this.roleTemplatesCounter;
    this.roleTemplates.push(roleTemplate);
    this.roleTemplates$.next(this.roleTemplates);
    console.log(this.roleTemplates);
    
  }

  getRoleTemplates(): Observable<any[]>{
    return this.roleTemplates$;
  }
/** Get Role Template Permissions Meta */
  getRoleTemplateMeta(){
    return this.http.get(`${CONFIG.backend.host}/role/role-template/permissions/meta`,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
  }
 
  /** Create Role Template */
  createRoleTemplate(data:any){
    return this.http.post(`${CONFIG.backend.host}/role/role-template`,
    data
    ,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
  }

  /** List Role Template */
  listRoleTemplate(){
    return this.http.get(`${CONFIG.backend.host}/role/role-template`,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
  }
  listRoleTemplateListByBGId(type:any,bgId:any){
    return this.http.get(`${CONFIG.backend.host}/role/role-template/`+type+`?bg=`+bgId,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
  }
  /** get single Role Template */
  singleRoleTemplate(ID:any){
    return this.http.get(`${CONFIG.backend.host}/role/role-template/${ID}`,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
  }

   /** update Role Template */
   updateRoleTemplate(data:any,ID:any){
    return this.http.put(`${CONFIG.backend.host}/role/role-template/${ID}`,
    data
    ,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
  }

  /** Delete Role Template */
  deleteRoleTemplateById(ID:any){
    return this.http.delete(`${CONFIG.backend.host}/role/role-template/${ID}`,{
      headers: {
        'X-ORG-ID': this.authService.getOrgId()
      }
    });
  }
  deleteRoleTemplate(id: number){
    let roleTemplateDeleted = this.roleTemplates.filter((x)=>{
      return x.id!=id;
    })
    this.roleTemplates=roleTemplateDeleted;
    this.roleTemplates$.next(this.roleTemplates);
  }

  pushRole(role: any){
    this.rolesCounter++;
    role.id=this.rolesCounter;
    this.roles.push(role);
    this.roles$.next(this.roles);
  }

  getRoles(): Observable<any[]>{
    return this.roles$;
  }

  deleteRole(id: number){
    let roleDeleted = this.roles.filter((x)=>{
      return x.id!=id;
    })
    this.roles=roleDeleted;
    this.roles$.next(this.roles);
  }

}
