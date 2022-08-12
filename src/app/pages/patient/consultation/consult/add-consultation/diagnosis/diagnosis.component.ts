import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { AlertService } from '@services/alert/alert.service';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
	selector: 'app-diagnosis',
	templateUrl: './diagnosis.component.html',
	styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
	galleryImagesList: any[] = [];
	showImageGallery: boolean = false;
	optionForToothDisplay: any;
	problemLst: any[] = problemListOfDiagnosis;

	constructor(
		public router: Router,
		public problemListService: ConsultationDiagnosisiProblemListService,
		private alertService: AlertService
	) {}

	ngOnInit(): void {
		this.problemList;
		this.toothChartList;
		this.getImageGallery();
	}

	ngAfterContentChecked(): void {
		var element: any = document.getElementById('scrollDiv');
		if (element) element.scrollTop = element.scrollHeight;
	}

	save(data: any) {
		this.alertService
			.conformAlert('Are you sure?', 'You want to save')
			.then((result: any) => {
				if (result.value) {
					this.router.navigate(['/dashboard/patient/consultation']);
				}
			});
	}
	cancel() {
		this.alertService
			.conformAlert('Are you sure?', 'You want to exit')
			.then((result: any) => {
				if (result.value) {
					localStorage.removeItem('diagnosisVisitedArray');
					this.router.navigate(['/dashboard/patient/consultation']);
				}
			});
	}

	get problemList(): any[] {
		return this.problemListService.problemList;
	}

	get toothChartList(): any[] {
		return this.problemListService.toothChartList;
	}

	getImageGallery() {
		this.galleryImagesList = [
			{
				imageTitle: 'Image 1',
				imageUrl: '/assets/images/diagnosis/Anterior_Occlusion.JPG'
			},
			{
				imageTitle: 'Image 2',
				imageUrl: '/assets/images/diagnosis/Anterior_Open.JPG'
			},
			{
				imageTitle: 'Image 3',
				imageUrl: '/assets/images/diagnosis/Cephalometric_X-ray.JPG'
			},
			{
				imageTitle: 'Image 4',
				imageUrl: '/assets/images/diagnosis/Frontal_Smile.JPG'
			},
			{
				imageTitle: 'Image 5',
				imageUrl: '/assets/images/diagnosis/Frontal.JPG'
			},
			{
				imageTitle: 'Image 6',
				imageUrl: '/assets/images/diagnosis/Lateral_Smile.JPG'
			},
			{
				imageTitle: 'Image 7',
				imageUrl: '/assets/images/diagnosis/Lateral.JPG'
			},
			{
				imageTitle: 'Image 8',
				imageUrl: '/assets/images/diagnosis/Left_Occlusion.JPG'
			},
			{
				imageTitle: 'Image 9',
				imageUrl: '/assets/images/diagnosis/Lower_Occlusal.JPG'
			},
			{
				imageTitle: 'Image 10',
				imageUrl: '/assets/images/diagnosis/Panoramic_X-ray.JPG'
			},
			{
				imageTitle: 'Image 11',
				imageUrl: '/assets/images/diagnosis/Right_Occlusion.JPG'
			},
			{
				imageTitle: 'Image 12',
				imageUrl: '/assets/images/diagnosis/Tracing.JPG'
			},
			{
				imageTitle: 'Image 13',
				imageUrl: '/assets/images/diagnosis/Upper_Occlusal.JPG'
			}
		];
	}

	onSelectOption($event: any) {
		this.problemLst[9].child.push($event);
		this.problemListService.problemList = this.problemLst;
	}
}
