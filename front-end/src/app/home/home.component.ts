import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('carousel_inner', { static: false }) carousel_inner!: ElementRef;

  caro_scroll(direction: number) {
    const container = this.carousel_inner.nativeElement;
    const scrollAmount = 1349;

    if (container) {
      container.scrollLeft += direction * scrollAmount;
    }
  }


  @ViewChild('productList', { static: false }) productList!: ElementRef;

  scroll(direction: number) {
    const container = this.productList.nativeElement;
    const scrollAmount = 300;

    if (container) {
      container.scrollLeft += direction * scrollAmount;
    }
  }

  medicines: any[] = 
  [
    {
      name: 'Lobun Forte Capsule',
      image: 'https://res.fkhealthplus.com/incom/images/product/Lobun-Forte-1647942443-10024582-1.jpg',
      manufacturer: 'J B Chemicals and Pharmaceuticals Ltd',
      price: 49.99,
      description: 'Description for Lobun Forte Capsule goes here.',
    },
    {
      name: 'Citralka Liquid',
      image: 'https://res.fkhealthplus.com/incom/images/product/Citralka-1668843747-10005444-1.jpg',
      manufacturer: 'Citralka',
      price: 149.99,
      description: 'Description for Citralka Liquid goes here.',
    },
    {
      name: 'Spondin Drops Homeopathic Medicine ',
      image: 'https://m.media-amazon.com/images/I/81FAVUgPUrL._AC_UL320_.jpg',
      manufacturer: 'Dr.Bhargava',
      price: 299.99,
      description: 'Neck Pain',
    },
    {
      name: 'Himalaya Ashvagandha - 60 Tablets',
      image: 'https://m.media-amazon.com/images/I/61eNW65rU0L._AC_UL320_.jpg',
      manufacturer: 'Himalaya',
      price: 176.49,
      description: ' Stress Relief',
    },
    {
      name: 'NutrinoPlus Piles Care',
      image: 'https://m.media-amazon.com/images/I/51OGniYdW9L._AC_UL320_.jpg',
      manufacturer: 'NutrinoPlus',
      price: 699.99,
      description: 'Bavasir Hemorrhoid Support',
    },
    {
      name: 'Urismuth ayurvedic kidney care',
      image: 'https://m.media-amazon.com/images/I/613Q86BtP5L._AC_UL320_.jpg',
      manufacturer: 'Urismuth',
      price: 285.00,
      description: 'dissolves and cleans kidney',
    },
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

  images  = [
    'https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2020/01/21143416/8-Types-of-Health-Information-Technology-Healthcare-Software-System.png',
    'https://images.squarespace-cdn.com/content/v1/5bdc389d55b02cca5feb8805/4fe163a5-9096-4471-a7f5-e55d25a154ed/mba-in-healthcare-management',
    'https://images.squarespace-cdn.com/content/v1/5bdc389d55b02cca5feb8805/39fa094f-eebd-43d2-9e1a-a7313d3f9fbf/mba-healthcare-management',
  ];

}
