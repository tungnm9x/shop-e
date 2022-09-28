import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;

  carouselItems = [
    {
      url: 'https://livedemo00.template-help.com/wt_60044/images/home-slider-1-slide-1-1920x900.jpg',
      title: 'Space As Clean As Beautiful',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit voluptatem officiis? Nemo pariatur ?',
    },
    {
      url: 'https://livedemo00.template-help.com/wt_60044/images/home-slider-1-slide-2-1920x900.jpg',
      title: 'Best Facial Cream Massage',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit voluptatem officiis? Nemo pariatur ?',
    },
    {
      url: 'https://livedemo00.template-help.com/wt_60044/images/home-slider-1-slide-3-1920x900.jpg',
      title: 'Space As Clean As Beautiful',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit voluptatem officiis? Nemo pariatur ?',
    },
  ];

  trendingServices$ = of([
    {
      id: '1',
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/04/3in1b-08-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
    },
    {
      id: '1',
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/trimun-thaidoc-1-1-scaled.jpg',
      name: 'Dịch vụ thải độc da thảo dược',
    },
    {
      id: '1',
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/jqjqjqjq-1-1-scaled.jpg',
      name: 'Liệu trình điều trị Mụn lưng – viêm nang lông với công nghệ IPL ',
    },
    {
      id: '1',
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/11/hinh-bs-3-scaled.jpg',
      name: 'Liệu trình da nhiễm Corticoid ',
    },
  ]);

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

  popularPost$ = of([
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
  ]);

  showVideo: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
