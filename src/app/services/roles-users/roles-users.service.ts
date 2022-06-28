import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
  
  constructor() { }

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
