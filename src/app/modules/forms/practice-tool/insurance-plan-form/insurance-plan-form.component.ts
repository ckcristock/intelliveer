import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddressFormService } from '@services/forms/address-form/address-form.service';

@Component({
  selector: 'app-insurance-plan-form',
  templateUrl: './insurance-plan-form.component.html',
  styleUrls: ['./insurance-plan-form.component.scss']
})
export class InsurancePlanFormComponent implements OnInit {

	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
  Form: FormGroup = new FormGroup({});
	countries: any;
	imageSrc: any;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Claim Information', id: 'claimInformation' },
		{ title: 'Providership Information', id: 'providershipInformation' },
		{ title: 'Insurance Portal ', id: 'insurancePortal' },
		{ title: 'Notes', id: 'notes' }
	];
  famiMembTitle: any;

  constructor(
    private fb: FormBuilder,
		private addressFormService: AddressFormService,
    private http: HttpClient
  ) {
    if (this.formData) {
			this.setUserDataToForm();
		}
  }

  ngOnInit(): void {
    console.log(this.formData)
    this.initForm(this.formData);
    this.getStaticData();
  }

  initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			logo: [data?.logo || 'null'],
			insurancePlanName: [data?.insurancePlanName || '', Validators.required],
			planType: [data?.planType || ''],
			electronicId: [data?.electronicId || ''],
			feeScheduleOffice: [data?.feeScheduleOffice || ''],
      feeScheduleInsurance: [data.feeScheduleInsurance || ''],
      feeScheduleCoPay: [data.feeScheduleCoPay || ''],
			physicalAddress: this.addressFormService.getAddressForm(
				data?.physicalAddress || {}, 
			),
      claimInformation: this.addressFormService.getAddressForm(
				data?.physicalAddress || {}, 
			),
      emailId: [data?.emailId || '' ],
      primaryPhoneType: [data?.primaryPhoneType || ''],
      primaryPhoneNumber: [data?.primaryPhoneNumber || ''],
      secondaryPhoneType: [data?.secondaryPhoneType || ''],
      secondaryPhoneNumber: [data?.secondaryPhoneNumber || ''],
      preferedMailMethodClaim: [data?.preferedMailMethodClaim || '',],
      emailIdProvider: [data?.emailIdProvider || '' ],
      primaryPhoneTypeProvider: [data?.primaryPhoneTypeProvider || ''],
      primaryPhoneNumberProvider: [data?.primaryPhoneNumberProvider || ''],
      secondaryPhoneTypeProvider: [data?.secondaryPhoneTypeProvider || ''],
      secondaryPhoneNumberProvider: [data?.secondaryPhoneNumberProvider || ''],
      preferedMailMethodProvider: [data?.preferedMailMethodProvider || '',],
      secondaryPreferredCommunicationMethod: [data?.secondaryPreferredCommunicationMethod || ''],
      website: [data?.website || ''],
      fax: [data?.fax || ''],
      websiteClaim: [data?.websiteClaim || ''],
      websiteInsurance: [data?.websiteInsurance || ''],
      faxClaim: [data?.faxClaim || ''],
      username: [data.username || ''],
      password: [data.password || ''],
      note: [data?.note || '']
		});
	}

  setUserDataToForm() {
		this.Form.controls['insurancePlanName'].setValue(this.formData.profile.insurancePlanName);
		this.Form.controls['planType'].setValue(
			this.formData.profile.planType
		);
		this.Form.controls['electronicId'].setValue(
			this.formData.profile.electronicId
		);
		this.Form.controls['feeScheduleOffice'].setValue(this.formData.profile.officeFeeSchedule);
		this.Form.controls['feeScheduleInsurance'].setValue(this.formData.profile.insuranceFeeSchedule);
		this.Form.controls['feeScheduleCoPay'].setValue(this.formData.profile.copayFeeSchedule);
		this.Form.controls['emailId'].setValue(
			this.formData.claimInformation.contact.email
		);
		this.Form.controls['primaryPhoneType'].setValue(this.formData.claimInformation.contact.primaryPhone.type);
    this.Form.controls['primaryPhoneNumber'].setValue(this.formData.claimInformation.contact.primaryPhone.number);
    this.Form.controls['secondaryPhoneType'].setValue(this.formData.claimInformation.contact.secondaryPhone.type);
    this.Form.controls['secondaryPhoneNumber'].setValue(this.formData.claimInformation.contact.secondaryPhone.number);

		this.Form.controls['preferedMailMethodClaim'].setValue(
			this.formData.claimInformation.contact.preferedMailMethod
		);
		this.Form.controls['websiteClaim'].setValue(this.formData.claimInformation.contact.website);
		this.Form.controls['faxClaim'].setValue(
			this.formData.claimInformation.contact.fax
		);
    this.Form.controls['emailIdProvider'].setValue(
			this.formData.providershipInformation.contact.email
		);
		this.Form.controls['primaryPhoneTypeProvider'].setValue(this.formData.providershipInformation.contact.primaryPhone.type);
    this.Form.controls['primaryPhoneNumberProvider'].setValue(this.formData.providershipInformation.contact.primaryPhone.number);
    this.Form.controls['secondaryPhoneTypeProvider'].setValue(this.formData.providershipInformation.contact.secondaryPhone.type);
    this.Form.controls['secondaryPhoneNumberProvider'].setValue(this.formData.providershipInformation.contact.secondaryPhone.number);

		this.Form.controls['preferedMailMethodProvider'].setValue(
			this.formData.providershipInformation.contact.preferedMailMethod
		);
		this.Form.controls['website'].setValue(this.formData.providershipInformation.contact.website);
		this.Form.controls['fax'].setValue(
			this.formData.providershipInformation.contact.fax
		);
		this.Form.controls['websiteInsurance'].setValue(
			this.formData.insurancePortal.url
		);
		this.Form.controls['username'].setValue(
			this.formData.insurancePortal.username
		);
		this.Form.controls['password'].setValue(
			this.formData.insurancePortal.password
		);
		this.Form.controls['note'].setValue(this.formData.notes);
	}

  handleUploadedImage(e: { url: string }) {
		if (e && this.Form) {
			this.Form.controls['logo'].setValue(e.url);
		}
	}

  onSectionChange(sectionId: any) {
		this.currentSelection = sectionId;
	}

  getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/global-data/static-types`)
      .subscribe({
        next: async (data: any) => {
          this.famiMembTitle = data;
        },
        error: () => { },
        complete: () => { }
      });
  }

  save(data: any) {
    let saveObj = {
      insuranceGroupId: "6321b374cc200afd53af7d03",
      profile: {
         insurancePlanName: data.insurancePlanName,
         planType: data.planType,
         electronicId: data.electronicId,
         officeFeeSchedule: data.feeScheduleOffice,
         insuranceFeeSchedule: data.feeScheduleInsurance,
         copayFeeSchedule: data.feeScheduleCoPay
      },
      claimInformation: {
        address: data.claimInformation,
        contact: {
          email: data.emailId,
          primaryPhone: {
            type: data.primaryPhoneType,
            countryCode: '',
            number: data.primaryPhoneNumber
          },
          secondaryPhone: {
            type: data.secondaryPhoneType,
            countryCode: '',
            number: data.secondaryPhoneNumber
          },
          preferedMailMethod: data.preferedMailMethodClaim,
          website: data.websiteClaim,
          fax: data.faxClaim
        }
      },
      providershipInformation: {
        address: data.physicalAddress,
        contact: {
          email: data.emailIdProvider,
          primaryPhone: {
            type: data.primaryPhoneTypeProvider,
            countryCode: '',
            number: data.primaryPhoneNumberProvider
          },
          secondaryPhone: {
            type: data.secondaryPhoneTypeProvider,
            countryCode: '',
            number: data.secondaryPhoneNumberProvider
          },
          preferedMailMethod: data.preferedMailMethodProvider,
          website: data.website,
          fax: data.fax
        },
        status : [
          {
            providerId: "providerId",
            status: "Available"
          }
        ]
      },
      insurancePortal: {
        url: data.websiteInsurance,
        username: data.username,
        password: data.password
      },
      notes: data.note
    }
		this.onSubmit.emit(saveObj);
	}
	cancel() {
		this.onCancel.emit();
	}

}