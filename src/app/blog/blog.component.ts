import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';
import { Helper } from '@core/utils';
import { of } from 'rxjs';

@Component({
  selector: 'nmt-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;
  showFilter = false;

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

  posts$ = of([
    {
      id: '1',
      imageUrl:
        'https://demos.codezeel.com/wordpress/WP01/WP017/wp-content/uploads/2021/08/The-Best-eleifend-Anti-Aging-Skin-Care-Routine-By-Experts.jpg',
      name: 'Botox, Fillers & An Effective Anti-Aging Skincare Routine',
      createdAt: new Date('03/06/2022').getTime(),
      createdBy: 'Admin',
    },
    {
      id: '2',
      imageUrl:
        'https://demos.codezeel.com/wordpress/WP01/WP017/wp-content/uploads/2022/03/Botox-Fillers-An-Effective-Anti-Aging-Skincare-Routine.jpg',
      name: 'Skin Care & Beauty Best-Vintage Bonorum Malorum',
      createdAt: new Date('03/07/2022').getTime(),
      createdBy: 'Admin',
    },
    {
      id: '3',
      imageUrl:
        'https://demos.codezeel.com/wordpress/WP01/WP017/wp-content/uploads/2021/06/Skin-Care-Beauty-Best-Vintage-Bonorum-Malorum.jpg',
      name: 'Self Care & Wellness Ideas consequuntur magni dolores',
      createdAt: new Date('03/08/2022').getTime(),
      createdBy: 'Admin',
    },
    {
      id: '4',
      imageUrl:
        'https://demos.codezeel.com/wordpress/WP01/WP017/wp-content/uploads/2018/05/The-Ultimate-Guide-to-Aging-Skin-Ipsum-Pretium-Bouquet.jpg',
      name: 'The Ultimate Guide To Aging Skin Ipsum Pretium Bouquet',
      createdAt: new Date('05/12/2022').getTime(),
      createdBy: 'Admin',
    },
  ]);

  archives$ = of([
    new Date('08/06/2022').getTime(),
    new Date('07/06/2022').getTime(),
    new Date('05/06/2022').getTime(),
    new Date('010/12/2021').getTime(),
  ]);
  constructor() {}

  ngOnInit(): void {
    Helper.scrollToTop();
  }
}
