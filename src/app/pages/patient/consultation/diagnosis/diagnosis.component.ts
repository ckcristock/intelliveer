import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    public router: Router, 
    public problemListService: ConsultationDiagnosisiProblemListService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.problemList;
    this.getImageGallery();
  }

  save(data: any) {
		this.alertService.conformAlert('Are you sure?', 'You want to save')
		.then((result: any) => {
			if (result.value) {
        this.router.navigate(['/dashboard/patient/consultation']);
			}
		});
	}
	cancel() {
		this.alertService.conformAlert('Are you sure?', 'You want to exit')
		.then((result: any) => {
			if (result.value) {
        localStorage.removeItem("diagnosisVisitedArray");
        this.router.navigate(['/dashboard/patient/consultation']);
			}
		});
	}

  get problemList(): any[]
  {
    return this.problemListService.problemList;
  }

  getImageGallery()
  {
    this.galleryImagesList = [
      {
        imageTitle: 'Image 1',
        imageUrl: 'https://th.bing.com/th/id/R.9491c77450192eda33988e08b1a111e3?rik=hut4dMEQMFMeTA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1385676%2fimages%2fo-DENTIST-facebook.jpg&ehk=mjXHPsW%2bhcEj0rrbnihxUeg3FX4BMiHRtvCgsG%2fxh7I%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        imageTitle: 'Image 2',
        imageUrl: 'https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
      },
      {
        imageTitle: 'Image 3',
        imageUrl: 'https://th.bing.com/th/id/OIP.1xkSd3MWAWfQd49qhjVe0QHaHa?pid=ImgDet&rs=1'
      },
      {
        imageTitle: 'Image 4',
        imageUrl: 'https://th.bing.com/th/id/R.e977960853e04e71fc916a7e0de10894?rik=7%2f8588f%2bYX7G8g&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fteeth%2fteeth-09.jpg&ehk=uEo9h4EkLuDJomaZBVRWY7QzOS0G%2b1B31xZEoKqYNx4%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        imageTitle: 'Image 5',
        imageUrl: 'https://th.bing.com/th/id/OIP.d87_4pn2Ss8Q41VdSaDz3AHaE8?pid=ImgDet&rs=1'
      }
    ];
  }


}
