import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private leftMenu: string[] = ["Business Group",
    "Legal Entity", "Location", "Practice"];
  private goBack: any = "Settings";
  private rightHeaders: string[] = ["ID",
    "Name", "Contact Person", "Phone no.", "Created on"];
  private tableContent: any[] = [
    {
      id: "BG1", name: "Business Group 1", contactPerson: "John Doe", phone: "123-456-7890",
      createdOn: "22 Jan 2021"
    },
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
    }
  ];
  private onboardingData: any[] = [];

  constructor() { }

  getOnboardingData() {
    this.leftMenu.forEach((elemento) => {
      this.onboardingData.push({ leftMenu: elemento });
    });
    this.onboardingData.push({ goBack: this.goBack });
    this.rightHeaders.forEach((elemento) => {
      this.onboardingData.push({ rightHeaders: elemento });
    });
    this.tableContent.forEach((elemento) => {
      this.onboardingData.push({ tableContent: elemento });
    });

    return this.onboardingData;

  }

  getLeftMenu() {
    return this.leftMenu;
  }
  getGoBack() {
    return this.goBack;
  }
  getRightHeaders() {
    return this.rightHeaders;
  }
  getTableContent() {
    return this.tableContent;
  }
}
