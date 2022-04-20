import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-guardian',
  templateUrl: './legal-guardian.component.html',
  styleUrls: ['./legal-guardian.component.scss']
})
export class LegalGuardianComponent implements OnInit {

  guardian = [
    {
      name: 'Olivia Doe',
      id: '(P1001)',
      gender: 'Female',
      date: 'May 10, 1958',
      duration: '30y, 2m',
      phone: '(844) 569-8628',
      email: 'yourname@email.com',
      address: '330 2nd Street Huntington Beach, CA 92646',
      chartNumber: 'US-10001',
      createdDate: 'Feb 15, 2022',
      isPrimary: true,
      isDisabled: false,
      image: 'https://aawafi.com/uploads/partners/profile/doctor.jpg',
    },
    {
      name: 'John Doe',
      id: '(P1002)',
      gender: 'Male',
      date: 'April 10, 1960',
      duration: '30y, 2m',
      phone: '(844) 569-8628',
      email: 'yourname@email.com',
      address: '330 2nd Street New Jersey, CA 92646',
      chartNumber: 'US-10088',
      createdDate: 'Feb 15, 2020',
      isPrimary: false,
      isDisabled: false,
      image:
        'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=',
    },
    {
      name: 'Marian Doe',
      id: '(P1003)',
      gender: 'Female',
      date: 'Dec. 07, 1974',
      duration: '30y, 2m',
      phone: '(844) 569-8628',
      email: 'yourname@email.com',
      address: '240 Street 7, New York, CA 92646',
      chartNumber: 'US-10348',
      createdDate: 'Aug. 04, 2021',
      isPrimary: false,
      isDisabled: true,
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg',
    },
  ];

  selectedGuardian: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoDetails(data: any) {
    this.selectedGuardian = data;
    this.router.navigate([
      '/patient-chart/patient-overview/legal_guardian',
      this.selectedGuardian.id,
    ]);
  }

}
