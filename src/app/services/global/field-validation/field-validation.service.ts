import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FieldValidationService {
  Form: FormGroup = new FormGroup({});
  validEmail: boolean | undefined;
  validPrimaryPhoneType: boolean | undefined;
  validPrimaryPhoneNumber: boolean | undefined;
  validSecondaryPhoneType: boolean | undefined;
  validSecondaryPhoneNumber: boolean | undefined;
  validPrimaryPreferredCommunicationMethod: boolean | undefined;
  validSecondaryPreferredCommunicationMethod: boolean | undefined;
  validPreferredTimingForCall: boolean | undefined;
  validDOB: boolean | undefined;
  validRelationship: boolean | undefined;

  mandAndRequiredFields: any[] = [
    { name: 'name', type: 'string', mandSaved: false, required: false, valid: false },
    { name: 'TIN', type: 'string', mandSaved: false, required: false, valid: false },
    { name: 'designation', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
    { name: 'title', type: 'dropdown', mandatory: false, mandSaved: false, required: false, valid: false },
    { name: 'firstName', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
    { name: 'lastName', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
    { name: 'email', type: 'email', mandatory: false, mandSaved: false, required: false, valid: false },
    { name: 'type', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
    { name: 'countryCode', type: 'number', mandatory: false, mandSaved: false, required: false, valid: false },
    { name: 'number', type: 'number', mandatory: false, mandSaved: false, required: false, valid: false },
  ];

  constructor() { }

  fieldValidation(fieldParam: any, notRequiredButPattern?: boolean, form?: any) {
    this.Form = form;
    console.log("forminserices", this.Form);

    let validator: any;

    if (notRequiredButPattern) {
      validator = (this.Form.get(fieldParam)?.valid && (this.Form.get(fieldParam)?.value != null) && this.Form.get(fieldParam)?.value != 0);
    } else {
      validator = this.Form.get(fieldParam)?.value != null;
    }

    this.mandAndRequiredFields.forEach(field => {
      if (field.name == fieldParam) {
        field.valid = validator;
      }
    });

    return this.mandAndRequiredFields;

    //   switch (fieldParam) {
    //     case 'relationship':
    //       console.log("validatorServices", validator);

    //       return validator;
    //     case 'DOB':
    //       return this.validDOB = validator;
    //     case 'emailId':
    //       return this.validEmail = validator;
    //     case 'primaryPhoneType':
    //       return this.validPrimaryPhoneType = validator;
    //     case 'primaryPhoneNumber':
    //       return this.validPrimaryPhoneNumber = validator;
    //     case 'secondaryPhoneType':
    //       return this.validSecondaryPhoneType = validator;
    //     case 'secondaryPhoneNumber':
    //       return this.validSecondaryPhoneNumber = validator;
    //     case 'primaryPreferredCommunicationMethod':
    //       return this.validPrimaryPreferredCommunicationMethod = validator;
    //     case 'secondaryPreferredCommunicationMethod':
    //       return this.validSecondaryPreferredCommunicationMethod = validator;
    //     case 'preferredTimingForCall':
    //       return this.validPreferredTimingForCall = validator;
    //     default:
    //       return 'nothing';
    //   }
  }
}
