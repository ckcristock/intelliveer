import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@config/index';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private header = {
    headers: {
      'X-ORG-ID': this.authService.getOrgId()
    }
  }

  constructor(private http: HttpClient, public authService : AuthService) { }

  getRoleTemplateList()
  {
    return this.http.get(`${CONFIG.backend.host}/role/role-template`, this.header);
  }

  getRoleList()
  {
    return this.http.get(`${CONFIG.backend.host}/role/role/`, this.header);
  }

  saveRoleFromRoleTemplate(Obj: any, bgName: any, roleType: string)
  {
    return this.http.post(`${CONFIG.backend.host}/role/template-based-role/` + roleType + `?bg=` + bgName, Obj, this.header);
  }

  updateRoleFromRoleTemplate(Obj: any, roleId: any)
  {
    return this.http.put(`${CONFIG.backend.host}/role/template-based-role/` + roleId, Obj, this.header);
  }

  saveRoleFromRoleScratch(Obj: any)
  {
    return this.http.post(`${CONFIG.backend.host}/role/role/`, Obj, this.header);
  }

  updateRoleFromRoleScratch(Obj: any, roleId: any)
  {
    return this.http.put(`${CONFIG.backend.host}/role/role/` + roleId, Obj, this.header);
  }

  deleteRole(id: string)
  {
    return this.http.delete(`${CONFIG.backend.host}/role/role/` + id, this.header);
  }

  getRoleById(id: string)
  {
    return this.http.get(`${CONFIG.backend.host}/role/role/` + id, this.header);
  }

  getLegelEntityList()
  {
    return this.http.get(`${CONFIG.backend.host}/bg/legal-entity`, this.header);
  }

  getLocationList()
  {
    return this.http.get(`${CONFIG.backend.host}/bg/location`, this.header);
  }

  getPracticeList()
  {
    return this.http.get(`${CONFIG.backend.host}/bg/practice`, this.header);
  }

  getPermissionList()
  {
    return this.http.get(`${CONFIG.backend.host}/role/role-template/permissions/meta`, this.header);
  }
}
