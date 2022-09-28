import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';
import { Helper } from '@core/utils';
import { of } from 'rxjs';

@Component({
  selector: 'nmt-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;
  showFilter = false;

  services$ = of([
    {
      id: 1,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/04/3in1b-08-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
    },
    {
      id: 2,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/trimun-thaidoc-1-1-scaled.jpg',
      name: 'Dịch vụ thải độc da thảo dược',
    },
    {
      id: 3,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/jqjqjqjq-1-1-scaled.jpg',
      name: 'Liệu trình điều trị Mụn lưng – viêm nang lông với công nghệ IPL ',
    },
    {
      id: 4,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/11/hinh-bs-3-scaled.jpg',
      name: 'Liệu trình da nhiễm Corticoid ',
    },
    {
      id: 1,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/04/3in1b-08-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
    },
    {
      id: 2,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/trimun-thaidoc-1-1-scaled.jpg',
      name: 'Dịch vụ thải độc da thảo dược',
    },
    {
      id: 3,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/jqjqjqjq-1-1-scaled.jpg',
      name: 'Liệu trình điều trị Mụn lưng – viêm nang lông với công nghệ IPL ',
    },

    {
      id: 1,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/04/3in1b-08-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
    },
    {
      id: 2,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/trimun-thaidoc-1-1-scaled.jpg',
      name: 'Dịch vụ thải độc da thảo dược',
    },
    {
      id: 3,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/jqjqjqjq-1-1-scaled.jpg',
      name: 'Liệu trình điều trị Mụn lưng – viêm nang lông với công nghệ IPL ',
    },
    {
      id: 4,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/11/hinh-bs-3-scaled.jpg',
      name: 'Liệu trình da nhiễm Corticoid ',
    },
  ]);

  categories$ = of([
    {
      name: 'Tất cả',
      quantity: 20,
    },
    {
      name: 'Thẩm mỹ mũi',
      quantity: 5,
    },
    {
      name: 'Thẩm mỹ ngực',
      quantity: 1,
    },
    {
      name: 'Căng da mặt',
      quantity: 7,
    },
    {
      name: 'Massage',
      quantity: 2,
    },
    {
      name: 'Dịch vụ khác',
      quantity: 3,
    },
  ]);

  constructor() {}

  ngOnInit(): void {
    Helper.scrollToTop();
  }
}
