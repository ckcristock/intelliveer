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
  private urlPreferences: string = "/dashboard/settings/patient";
  private urlSettings: string = "/dashboard/settings";

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
      child: [
        {
          title: "Add",
          url: `${this.urlPatientUser}/legal-guardian/add`
        },
      ]
    },
    {
      title: "Payment Party",
      url: `${this.urlPatientUser}/payment-party`,
      child: [
        {
          title: "Add",
          url: `${this.urlPatientUser}/payment-party/add`
        },
      ]
    },
    {
      title: "Insurance Subscriber",
      url: `${this.urlPatientUser}/insurance-subscriber`,
      child: [
        {
          title: "Add",
          url: `${this.urlPatientUser}/insurance-subscriber/add`
        },
      ]
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
      child: [
        {
          title: "Add",
          url: `${this.urlPatientUser}/family_members/add`
        },
      ]
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
      isEnabled: true,
      value: "CAN_RETRIEVE_BUSINESS_GROUP",
      child: [{
        title: "Add",
        url: `${this.urlOnboarding}/business-group/add`,
        isEnabled: true,
        value: "CAN_CREATE_BUSINESS_GROUP",
      },{
        title: "Edit",
        isEnabled: true,
        value: "CAN_EDIT_BUSINESS_GROUP",
      },{
        title: "Delete",
        isEnabled: true,
        value: "CAN_DELETE_BUSINESS_GROUP",
      }]
    },
    {
      title: "Legal Entity",
      url: `${this.urlOnboarding}/legal-entity`,
      isEnabled: true,
      value: "CAN_RETRIEVE_LEGAL_ENTITY",
      child: [{
        title: "Add",
        url: `${this.urlOnboarding}/legal-entity/add`,
        isEnabled: true,
        value: "CAN_CREATE_LEGAL_ENTITY",
      },{
        title: "Edit",
        isEnabled: true,
        value: "CAN_EDIT_LEGAL_ENTITY",
      },{
        title: "Delete",
        isEnabled: true,
        value: "CAN_DELETE_LEGAL_ENTITY",
      }]
    },
    {
      title: "Location",
      url: `${this.urlOnboarding}/location`,
      isEnabled: true,
      value: "CAN_RETRIEVE_LOCATION",
      child: [{
        title: "Add",
        isEnabled: true,
        value: "CAN_CREATE_LOCATION",
        url: `${this.urlOnboarding}/location/add`

      },{
        title: "Edit",
        isEnabled: true,
        value: "CAN_EDIT_LOCATION",
        url: `${this.urlOnboarding}/location/add`

      },{
        title: "Delete",
        isEnabled: true,
        value: "CAN_DELETE_LOCATION",
        url: `${this.urlOnboarding}/location/add`

      }]
    },
    {
      title: "Practice",
      url: `${this.urlOnboarding}/practice`,
      isEnabled: true,
      value: "CAN_RETRIEVE_PRACTICE",
      child: [{
        title: "Add",
        isEnabled: true,
        value: "CAN_CREATE_PRACTICE",
        url: `${this.urlOnboarding}/practice/add`
      },{
        title: "Edit",
        isEnabled: true,
        value: "CAN_EDIT_PRACTICE",
        url: `${this.urlOnboarding}/location/add`

      },{
        title: "Delete",
        isEnabled: true,
        value: "CAN_DELETE_PRACTICE",
        url: `${this.urlOnboarding}/location/add`

      }]
    },
    {
      title: "Mapping",
      isEnabled: true,
      value: "CAN_CREATE_BUSINESS_GROUP",
      url: `${this.urlOnboarding}/mapping`,
      child: []
    },
  ];

  private routesSettingsRoleManage: any[] = [
    {
      title: "Manage Role Templates",
      url: `${this.urlRoleManage}/manage-role-template`,
      isEnabled: true,
      value: "CAN_RETRIEVE_ROLE_TEMPLATE",
      child: [{
        title: "Add",
        url: `${this.urlRoleManage}/manage-role-template/add`,
        isEnabled: true,
        value: "CAN_CREATE_ROLE_TEMPLATE",
      },{
        title: "edit",
        url: `${this.urlRoleManage}/manage-role-template/edit`,
        isEnabled: true,
        value: "CAN_EDIT_ROLE_TEMPLATE",
      },]
    },
    {
      title: "Manage Role",
      url: `${this.urlRoleManage}/manage-role`,
      isEnabled: true,
      value: "",
      child: [{
        title: "Add",
        url: `${this.urlRoleManage}/manage-role/add`,
      },{
        title: "Edit",
        url: `${this.urlRoleManage}/manage-role/edit`,
      }]
    },
  ];

  private routesSettingsUserManage: any[] = [
    {
      title: "Manage User",
      url: `${this.urlUserManage}/manage-user`,
      isEnabled: true,
      value: "CAN_RETRIEVE_USER",
      child: [{
        title: "Create User",
        url: `${this.urlUserManage}/manage-user/add-user`,
        isEnabled: true,
        value: "CAN_CREATE_USER",
      },{
        title: "Activate and Deactivate",
        isEnabled: true,
        value: "CAN_ENABLE_OR_DISABLE_USER_LOGIN",
      }]
    },
    {
      title: "Edit User",
      url: `${this.urlUserManage}/user-policy`,
      isEnabled: true,
      value: "",
      child: [
      {
        title: "Role Assignment",
        url: `${this.urlUserManage}/edit-user/assign-role`,
        isEnabled: true,
        value: "CAN_UPDATE_USER_ROLE",
      },
      {
        title: "User Policy",
        url: `${this.urlUserManage}/edit-user/user-policy`,
        isEnabled: true,
        value: "",
      },
      {
        title: "Personal Information",
        url: `${this.urlUserManage}/edit-user/personal-info`,
        isEnabled: true,
        value: "CAN_UPDATE_USER_PROFILE",
      },
      {
        title: "Provider",
        url: `${this.urlUserManage}/edit-user/user-provider`,
        isEnabled: true,
        value: "",
      },{
        title: "Document",
        url: `${this.urlUserManage}/edit-user/user-document`,
        isEnabled: true,
        value: "",
      },]
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

  getSettingsUrl() {
    return this.urlSettings;
  }

  getSettingsOnboardingUrl() {
    return this.urlOnboarding;
  }

  getSettingsRoleManageUrl() {
    return this.urlRoleManage;
  }

  getSettingsUserManageUrl() {
    return this.urlUserManage;
  }

  getSettingsPreferencesUrl() {
    return this.urlPreferences;
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
