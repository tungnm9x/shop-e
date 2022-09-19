import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '../const';

@Component({
  selector: 'nmt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items = [
    {
      label: 'Giới thiệu',
      route: ROUTES_CONST.HOME.ROOT,
    },
    {
      label: 'Dịch vụ',
      route: ROUTES_CONST.SERVICE.ROOT,
    },
    {
      label: 'Sản phẩm',
      route: ROUTES_CONST.PRODUCT.ROOT,
    },
    {
      label: 'Đặt lịch',
      route: ROUTES_CONST.BOOKING.ROOT,
    },
    {
      label: 'Kiến thức làm đẹp',
      route: ROUTES_CONST.ARTICE.ROOT,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
