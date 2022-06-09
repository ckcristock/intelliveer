import { keyframes } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPatientRoutesService {

  private urlCoorWithProsp: string = "/dashboard/home/add-patient/coor-with-prospect";
  private patientsTaken: any [] = [];

  constructor() { }

  private routesCoordWithProsp: any[] = [
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

  private patientsSavedUnsaved: any [] = [
    {
      name:'Patient 2',
      taken: true,
      saved: false
    },
    {
      name:'Patient 3',
      taken: false,
      saved: false
    },
    {
      name:'Patient 4',
      taken: false,
      saved: false
    }
  ];

   private patientsSavedUnsaved$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  setTaken(numb: any){
    for(let i=0;i<numb;i++){
      this.patientsSavedUnsaved[i].taken=true;
      this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
    }
    for(let j=numb;j<this.patientsSavedUnsaved.length;j++){
      this.patientsSavedUnsaved[j].taken=false;
      this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
    }
    
  }

  getCoordWithProspRoutes(){
    return this.routesCoordWithProsp;
  }

  setPatientSaved(id:number){
    this.patientsSavedUnsaved[id].saved = true;
    this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
  }

  get$(){
    this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
  }

  getPatientsSavedUnsaved(): Observable<any[]>{
    return this.patientsSavedUnsaved$;
  }

  getCheckAllSaved(){
    let patientsUnsaved:any [] = [];
    patientsUnsaved= this.patientsSavedUnsaved.filter((x)=>{
      return x.saved == false&&x.taken==true;
    });

    if(patientsUnsaved.length > 0){
      return false;
    } else {
      return true;
    }
  }

  getSavedPatientsKeys(){
    let patientsSaved = this.patientsSavedUnsaved.filter((x)=>{
      return x.saved == true && x.taken == true;
    });

    var keys:string [] = [];
    patientsSaved.forEach(patientsSaved => {
      let key = patientsSaved.name;
      keys.push(key);
    })
    return keys;
  }
}
