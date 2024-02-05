import { Component } from '@angular/core';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {

  length = 5;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  categories : any[] = 
  [
    'General practitioner', 'Psychiatrist', 'Pediatrician', 'Neurologist', 'Urologist', 'Cardiologist', 'Dermatologist',
  ];

  doctors: any[] = 
  [
    {
      name: 'Ankush Gupta',
      image: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
      specialization: 'Gynocologist',
      description: 'MBBS',
    },
    {
      name: 'Anitha Mohan',
      image: 'https://specialisthospital.in/wp-content/uploads/2023/05/NewDoctorsWebsite-Anitha.jpg',
      specialization: 'Peadiatrition',
      description: 'MBBS',
    },
    {
      name: 'Southik Pandya',
      image: 'https://www.woodlandshospital.in/images/doctor-img/Soutik-Panda-New1.jpg',
      specialization: 'ENT Specialist',
      description: 'MBBS',
    },
  ];

  duty_doctors: any[] = 
  [
    {
      name: 'Thrupthi Ganga',
      image: 'https://kangaroocareindia.com/static/media/dr-thrupthi-new.0faf7b7fc188451aa9ce.JPG',
      specialization: 'Peadiatritian',
      description: 'MBBS',
    },
    {
      name: 'Jan Sriram',
      image: 'https://specialisthospital.in/wp-content/uploads/2023/05/NewDoctorsWebsite-Sriram.jpg',
      specialization: 'Neurologist',
      description: 'MBBS',
    },
    {
      name: 'Monimoy Ghosh',
      image: 'https://www.woodlandshospital.in/images/doctor-img/monimoy-ghosh.jpg',
      specialization: 'Urologist',
      description: 'MBBS',
    },
  ];

}
