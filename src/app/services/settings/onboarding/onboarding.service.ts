import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private onboardingData: any = {
    leftMenu: ["Business Group",
      "Legal Entity", "Location", "Practice"],
    goBack: "Settings",
    rightHeaders: [{ name: "id", value: "ID" },
    { name: "name", value: "Name" }, { name: "contactPerson", value: "Contact Person" },
    { name: "phone", value: "Phone no." }, { name: "createdOn", value: "Created on" }],
    tableContent: [
      {
        id: "BG1", name: "Business Group 1", contactPerson: "John Doe", phone: "123-456-7890",
        createdOn: "22 Jan 2021"
      },
      {
        id: "BG2", name: "Business Group 2", contactPerson: "John Doe", phone: "123-456-7890",
        createdOn: "22 Jan 2021"
      },
      {
        id: "BG3", name: "Business Group 3", contactPerson: "John Doe", phone: "123-456-7890",
        createdOn: "22 Jan 2021"
      },
      {
        id: "BG4", name: "Business Group 4", contactPerson: "John Doe", phone: "123-456-7890",
        createdOn: "22 Jan 2021"
      },
      {
        id: "BG5", name: "Business Group 5", contactPerson: "John Doe", phone: "123-456-7890",
        createdOn: "22 Jan 2021"
      },
    ]
  };

  constructor() { }

  getOnboardingData() {
    return this.onboardingData;
  }
}
