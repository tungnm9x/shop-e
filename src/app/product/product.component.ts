import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';
import { Helper } from '@core/utils';
import { of } from 'rxjs';

@Component({
  selector: 'nmt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;

  categories$ = of([
    {
      name: 'Accessories',
      quantity: 5,
    },
    {
      name: 'Clothing',
      quantity: 1,
    },
    {
      name: 'Decor',
      quantity: 7,
    },
    {
      name: 'HD Camera',
      quantity: 10,
    },
    {
      name: 'Hoodies',
      quantity: 3,
    },
  ]);

  minValue: number = 0;
  maxValue: number = 3000000;

  options: Options = {
    floor: 0,
    ceil: 3000000,
    step: 500000,
  };

  sort = 1;
  sorts = [
    {
      label: 'Default sorting',
      value: 1,
    },
    {
      label: 'Sort by latest',
      value: 2,
    },
    {
      label: 'Sort by price: low to high',
      value: 3,
    },
    {
      label: 'Sort by price: high to low',
      value: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    Helper.scrollToTop();
  }

  pageIndex = 1;
  total = 5;
  newProducts$ = of([
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/06/1707x1707-scaled.jpg',
      name: 'Rose Sleeping Mask – 50g',
      price: 388000,
    },
    {
      imageUrl: 'https://gaspa.vn/wp-content/uploads/2022/06/KCN-scaled.jpeg',
      name: 'Kem Chống Nắng Sunflower SPF 50+ PA++++ 30g',
      price: 488000,
    },
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/06/Collagen-mask-scaled.jpeg',
      name: 'KEVA MASK Collagen – 25g',
      price: 1110000,
    },
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg',
      name: 'Kem Dưỡng Ngày Lotus Body Whitening – 150g',
      price: 150000,
    },
  ]);
}
