import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {

  constructor() { }

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
