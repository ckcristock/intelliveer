import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalRoutesService {

  private urlPatientUser: string = "/dashboard/patient/patient-user";
  private urlCoorWithProsp: string = "/dashboard/home/add-patient/coor-with-prospect";
  private urlInsurance: string = "/dashboard/patient/insurance";

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
          url: `${this.urlCoorWithProsp}/family-members/additional-patient-2`},
        {
          title: "Patient 3",
          url: `${this.urlCoorWithProsp}/family-members/additional-patient-3`},
        {
          title: "Patient 4",
          url: `${this.urlCoorWithProsp}/family-members/additional-patient-4`}
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

  private routesPatientInsurance: any[]=[
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

  // get base URL
  getPatientUserUrl(){
    return this.urlPatientUser;
  }

  getCoordWithProspUrl(){
    return this.urlCoorWithProsp;
  }

  getPatientInsuranceUrl(){
    return this.urlInsurance;
  }

  // get Routes

  getPatientUserRoutes(){
    return this.routesPatientPatientUser;
  }

  getCoordWithProspRoutes(){
    return this.routesHomeAddPatientCoordWithProsp;
  }

  getPatientInsuranceRoutes(){
    return this.routesPatientInsurance;
  }

}
