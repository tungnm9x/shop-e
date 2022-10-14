import { Component, Input, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';

@Component({
  selector: 'nmt-home-new-products',
  templateUrl: './home-new-products.component.html',
  styleUrls: ['./home-new-products.component.scss'],
})
export class HomeNewProductsComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;

  @Input() newProducts: any;
  constructor() {}

  ngOnInit(): void {}
}
