import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nmt-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() item!: {
    imageUrl: string;
    name: string;
    price: number;
  };

  constructor() {}

  ngOnInit(): void {}
}
