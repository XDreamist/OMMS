import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent {
  

  constructor(private dialogService: DialogService) { }

  addToCart(medicine: any): void {
    
    this.dialogService.openCartDialog(medicine);
  }

  filteredMedicines: any[] = [];

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

  categories : any[] = 
  [
    'Health & Personal Care', 'Ayurveda Products', 'Herbal Supplements', 'Personal Pill Organisers', 
    'Digestion & Nausea', 'Cough & Cold',
  ];

  priceRange: { start: number, end: number } = { start: 0, end: 1000 };

  onPriceRangeChange() {
    console.log('Price range changed:', this.priceRange.start, this.priceRange.end);
    this.filteredMedicines = this.medicines.filter(medicine =>
      medicine.price >= this.priceRange.start && medicine.price <= this.priceRange.end
    );
  }

}
