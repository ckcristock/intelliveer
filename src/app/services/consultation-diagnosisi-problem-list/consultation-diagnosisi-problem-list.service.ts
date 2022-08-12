import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationDiagnosisiProblemListService {

  problemList: any[] = [];
  toothChartList: any[] = [];
  treatmentOptionsArray: 
    {
      Timing: any,
      Treament_Phase: any,
      Treament_Type: any,
      Treament_Time: any,
      Prerequisites: any[],
      Extractions: [
        {
          adultTooth: any[]
        },
        {
          childTooth: any[]
        }
      ],
      Chief_Concerns_1: any,
      Chief_Concerns_2: any,
      Expectations: any,
      Diagnosis: any,
      anticipated_1: any,
      anticipated_2: any,
      risk: any[],
      adjunctive: any[],
      Appliance_Sequence: any[],
      Bracket_Variations: any[],
      Retention: any[]
    } = {
      Timing: undefined,
      Treament_Phase: undefined,
      Treament_Type: undefined,
      Treament_Time: undefined,
      Prerequisites: [],
      Extractions: [
        {
          adultTooth: []
        },
        {
          childTooth: []
        }
      ],
      Chief_Concerns_1: undefined,
      Chief_Concerns_2: undefined,
      Expectations: undefined,
      Diagnosis: undefined,
      anticipated_1: undefined,
      anticipated_2: undefined,
      Appliance_Sequence: [],
      risk: [],
      adjunctive: [],
      Bracket_Variations: [],
      Retention: []
    };
    treatmentOptionObj: any = {};

    compareAllOptions: any[] = [];

  constructor() { }
}
