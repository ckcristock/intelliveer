import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalRoutesService {

  private urlPatientUser: string = "/dashboard/patient/patient-user";
  private urlCoorWithProsp: string = "/dashboard/home/add-patient/coor-with-prospect";
  private urlInsurance: string = "/dashboard/patient/insurance";
  private urlOnboarding: string = "/dashboard/settings/onboarding";
  private urlRoleManage: string = "/dashboard/settings/role-management";
  private urlUserManage: string = "/dashboard/settings/user-management";

  constructor() { }

  private routesPatientPatientUser: any[] = [
    {
      title: "Patient Detail",
      url: `${this.urlPatientUser}/patient-detail`,
      child: []
    },
    {
      title: "Legal Guardian",
      url: `${this.urlPatientUser}/legal-guardian`,
      child: []
    },
    {
      title: "Payment Party",
      url: `${this.urlPatientUser}/payment-party`,
      child: []
    },
    {
      title: "Insurance Subscriber",
      url: `${this.urlPatientUser}/insurance-subscriber`,
      child: []
    },
    {
      title: "External Providers",
      url: `${this.urlPatientUser}/provider`,
      child: []
    },
    {
      title: "Referrer",
      url: `${this.urlPatientUser}/referer`,
      child: []
    },
    {
      title: "Family Members",
      url: `${this.urlPatientUser}/family_members`,
      child: []
    },
  ];

  private routesHomeAddPatientCoordWithProsp: any[] = [
    {
      title: "Caller's Info",
      url: `${this.urlCoorWithProsp}/callers-info`,
      child: []
    },
    {
      title: "Patient",
      url: `${this.urlCoorWithProsp}/patient`,
      child: []
    },
    {
      title: "Legal Guardian",
      url: `${this.urlCoorWithProsp}/lg-guardian`,
      child: []
    },
    {
      title: "Dentist",
      url: `${this.urlCoorWithProsp}/dentist`,
      child: []
    },
    {
      title: "Referrer",
      url: `${this.urlCoorWithProsp}/referrer`,
      child: []
    },
    {
      title: "Insurance",
      url: `${this.urlCoorWithProsp}/insurance`,
      child: []
    },
    {
      title: "Family Members",
      url: `${this.urlCoorWithProsp}/family-members`,
      child: [
        {
          title: "Patient 2",
          url: `${this.urlCoorWithProsp}/family-members/additional-patient-2`
        },
        {
          title: "Patient 3",
          url: `${this.urlCoorWithProsp}/family-members/additional-patient-3`
        },
        {
          title: "Patient 4",
          url: `${this.urlCoorWithProsp}/family-members/additional-patient-4`
        }
      ]
    },
    {
      title: "Appointment",
      url: `${this.urlCoorWithProsp}/appointment`,
      child: []
    },
    {
      title: "Conclusion",
      url: `${this.urlCoorWithProsp}/conclusion`,
      child: []
    },
  ];

  private routesPatientInsurance: any[] = [
    {
      title: "Active",
      url: `${this.urlInsurance}/active`,
      child: []
    },
    {
      title: "Policy Info",
      url: `${this.urlInsurance}/policy-info`,
      child: []
    },
    {
      title: "Ortho Benef",
      url: `${this.urlInsurance}/ortho-benef`,
      child: []
    },
    {
      title: "Denta Benef",
      url: `${this.urlInsurance}/dental-benef`,
      child: []
    },
    {
      title: "Billing",
      url: `${this.urlInsurance}/billing`,
      child: []
    },
    {
      title: "Dropped",
      url: `${this.urlInsurance}/dropped`,
      child: []
    },
  ];

  private routesSettingsOnboarding: any[] = [
    {
      title: "Business Group",
      url: `${this.urlOnboarding}/business-group`,
      child: [{
        title: "Add",
        url: `${this.urlOnboarding}/business-group/add`
      },]
    },
    {
      title: "Legal Entity",
      url: `${this.urlOnboarding}/legal-entity`,
      child: [{
        title: "Add",
        url: `${this.urlOnboarding}/legal-entity/add`
      },]
    },
    {
      title: "Location",
      url: `${this.urlOnboarding}/location`,
      child: [{
        title: "Add",
        url: `${this.urlOnboarding}/location/add`
      },]
    },
    {
      title: "Practice",
      url: `${this.urlOnboarding}/practice`,
      child: [{
        title: "Add",
        url: `${this.urlOnboarding}/practice/add`
      },]
    },
    {
      title: "Mapping",
      url: `${this.urlOnboarding}/mapping`,
      child: []
    },
  ];

  private routesSettingsRoleManage: any[] = [
    {
      title: "Manage Role Templates",
      url: `${this.urlRoleManage}/manage-role-template`,
      child: [{
        title: "Add",
        url: `${this.urlRoleManage}/manage-role-template/add`
      },]
    },
    {
      title: "Manage Role",
      url: `${this.urlRoleManage}/manage-role`,
      child: [{
        title: "Add",
        url: `${this.urlRoleManage}/manage-role/add`
      },{
        title: "Edit",
        url: `${this.urlRoleManage}/manage-role/edit`
      }]
    },
  ];

  private routesSettingsUserManage: any[] = [
    {
      title: "Manage User",
      url: `${this.urlUserManage}/manage-user`,
      child: [{
        title: "Add",
        url: `${this.urlUserManage}/manage-user/add`
      },]
    },
    {
      title: "User Policy",
      url: `${this.urlUserManage}/user-policy`,
      child: []
    },
  ];
  // get base URL
  getPatientUserUrl() {
    return this.urlPatientUser;
  }

  getCoordWithProspUrl() {
    return this.urlCoorWithProsp;
  }

  getPatientInsuranceUrl() {
    return this.urlInsurance;
  }

  getSettingsOnboardingUrl() {
    return this.urlOnboarding;
  }

  getSettingsRoleManage() {
    return this.urlRoleManage;
  }

  getSettingsUserManage() {
    return this.urlUserManage;
  }

  // get Routes

  getPatientUserRoutes() {
    return this.routesPatientPatientUser;
  }

  getCoordWithProspRoutes() {
    return this.routesHomeAddPatientCoordWithProsp;
  }

  getPatientInsuranceRoutes() {
    return this.routesPatientInsurance;
  }

  getSettingsOnboardingRoutes() {
    return this.routesSettingsOnboarding;
  }

  getSettingsRoleManageRoutes() {
    return this.routesSettingsRoleManage;
  }

  getSettingsUserManageRoutes() {
    return this.routesSettingsUserManage;
  }

}
