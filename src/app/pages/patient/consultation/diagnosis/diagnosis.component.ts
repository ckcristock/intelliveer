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
  toothChartLstPart1: any[] = [];
  toothChartLstPart2: any[] = [];
  toothChartLstPart3: any[] = [];
  toothChartLstPart4: any[] = [];
  optionForToothDisplay: any;
  problemLst: any[] = problemListOfDiagnosis;

  constructor(
    public router: Router, 
    public problemListService: ConsultationDiagnosisiProblemListService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.problemList;
    this.toothChartList;
    this.getImageGallery();
    this.getToothChartList();
  }

  ngAfterContentChecked(): void
  {
    let toothChartObj: any = this.problemListService.toothChartList;
    if(toothChartObj.length != 0)
    {
      if(toothChartObj.id > 0 && toothChartObj.id <= 8)
      {
        this.removeTooth(this.toothChartLstPart1.find(obj => obj.title == toothChartObj.id));
      }
      else if(toothChartObj.id > 8 && toothChartObj.id <= 16)
      {
        this.removeTooth(this.toothChartLstPart2.find(obj => obj.title == toothChartObj.id));
      }
      else if(toothChartObj.id > 16 && toothChartObj.id <= 24)
      {
        this.removeTooth(this.toothChartLstPart3.find(obj => obj.title == toothChartObj.id));
      }
      else
      {
        this.removeTooth(this.toothChartLstPart4.find(obj => obj.title == toothChartObj.id));
      }
    }
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

  get toothChartList(): any[]
  {
    return this.problemListService.toothChartList;
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

  getToothChartList()
  {
    for (let i = 1; i <= 8; i++) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.toothChartLstPart1.push(obj);      
    }
    for (let i = 9; i <= 16; i++) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.toothChartLstPart2.push(obj);  
    }
    for (let i = 24; i >= 17; i--) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.toothChartLstPart3.push(obj);        
    }
    for (let i = 32; i >= 25; i--) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.toothChartLstPart4.push(obj);       
    }
  }

  removeTooth(obj: any)
  {
    obj.remove = true;
  }

  disableTooth(obj: any)
  {
    obj.show = false;
  }


  selectToothOption(obj: any, childTitle: any)
  {
    let Obj = {
      title: obj.title + " - " + childTitle,
      id: obj.title,
      checked: true
    }
    this.problemLst[9].child.push(Obj);
    this.problemListService.problemList = this.problemLst;
  }


}
