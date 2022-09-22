import { Component, Input, OnInit } from '@angular/core';
import { ROUTES_CONST } from '../const';

export interface HeaderItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'nmt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() items: HeaderItem[] = [
    {
      label: 'Giới thiệu',
      route: ROUTES_CONST.HOME.ROOT,
      icon: './assets/icons/svgs/intro.svg',
    },
    {
      label: 'Dịch vụ',
      route: ROUTES_CONST.SERVICE.ROOT,
      icon: './assets/icons/svgs/service.svg',
    },
    {
      label: 'Sản phẩm',
      route: ROUTES_CONST.PRODUCT.ROOT,
      icon: './assets/icons/svgs/product.svg',
    },
    {
      label: 'Đặt lịch',
      route: ROUTES_CONST.BOOKING.ROOT,
      icon: './assets/icons/svgs/booking.svg',
    },
    {
      label: 'Kiến thức làm đẹp',
      route: ROUTES_CONST.ARTICE.ROOT,
      icon: './assets/icons/svgs/knowledge.svg',
    },
  ];

  @Input() isShow: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
