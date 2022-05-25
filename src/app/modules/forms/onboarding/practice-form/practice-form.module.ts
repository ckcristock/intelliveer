import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeFormComponent } from './practice-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderModule } from '@modules/image-uploader/image-uploader.module';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { ContactPersonFormModule } from '@modules/forms/contact-person-form/contact-person-form.module';
import { ContactDetailsFormModule } from '@modules/forms/contact-details-form/contact-details-form.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ScrollspyModule } from '@modules/scrollspy/scrollspy.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';

@NgModule({
	declarations: [PracticeFormComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AddressFormModule,
		ContactPersonFormModule,
		ContactDetailsFormModule,
		NgSelectModule,
		ImageUploaderModule,
		NavBarPillsModule,
		ScrollspyModule
	],
	exports: [PracticeFormComponent],
})
export class PracticeFormModule {}
