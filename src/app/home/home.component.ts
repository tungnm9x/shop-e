import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselItems = [
    {
      url: 'https://gaspa.vn/wp-content/uploads/2022/08/cover-1@4x-8.png',
    },
    {
      url: 'https://gaspa.vn/wp-content/uploads/2022/01/bnner1fquynhne-01-scaled.jpg',
    },
    {
      url: 'https://gaspa.vn/wp-content/uploads/2022/03/z3258774024138_769db9af461532aec73dc99bd44bff20-scaled.jpg',
    },
  ];
  carouselIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  showSolutions: boolean = false;
  trendingProducts$ = of([
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/04/3in1b-08-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
      price: 120000,
    },
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/trimun-thaidoc-1-1-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
      price: 120000,
    },
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/jqjqjqjq-1-1-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1 ',
      price: 120000,
    },
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/11/hinh-bs-3-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1 ',
      price: 120000,
    },
    {
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/kiemnhon-trimun-23-04-2019-03.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1 ',
      price: 120000,
    },
  ]);

  newProducts$ = of([
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      name: 'T-shirt 1',
      price: 120000,
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      name: 'T-shirt 2',
      price: 120000,
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      name: 'T-shirt 3',
      price: 120000,
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      name: 'T-shirt 4',
      price: 120000,
    },
  ]);

  load(x: any) {
    console.log(x);
  }
}
