import { Component } from '@angular/core';

interface Card {
  icon: string;
  value: string;
  label: string;
  // progress: number;   // percentage 0–100
  // footer: string;
}

@Component({
  selector: 'app-darsh',
  templateUrl: './darsh.component.html',
  styleUrls: ['./darsh.component.css']
})
export class DarshComponent {
  cards: Card[] = [
    {
      icon: 'person',
      value: 'users',
      label: 'total number of users',
      // progress: 56,
      // footer: '$5 569 (56 %)'
    },
    {
      icon: 'storefront',
      value: 'productsCategories',
      label: 'total number of Categories',
      // progress: 63,
      // footer: '52 Completed (63 %)'
    },
    {
      icon: 'price_check',
      value: 'ProductsSold',
      label: 'total number of products sold',
      // progress: 78,
      // footer: '16 Completed (78 %)'
    },
    {
      icon: 'money_off',
      value: 'debts',
      label: 'total number of debts',
      // progress: 46,
      // footer: '$2 254 (46 %)'
    }
  ];
}
