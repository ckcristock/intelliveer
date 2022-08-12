import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  consultationList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addConsultation()
	{
		console.log("go to consultation")
    this.router.navigate(['/dashboard/patient/consultation/consultation/add']);
	}

}
