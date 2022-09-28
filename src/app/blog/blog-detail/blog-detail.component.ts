import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'nmt-blog-detail',
  templateUrl: './blog-detail.component.html',
  styles: [
    `
      .blog-img {
        object-fit: cover;
        max-height: 1124px;
      }

      .shadow-content {
        box-shadow: 0px 0px 14px 0px rgb(0 0 0 / 10%);
      }
    `,
  ],
})
export class BlogDetailComponent implements OnInit {
  detail$ = of({
    id: '4',
    imageUrl:
      'https://demos.codezeel.com/wordpress/WP01/WP017/wp-content/uploads/2018/05/The-Ultimate-Guide-to-Aging-Skin-Ipsum-Pretium-Bouquet.jpg',
    name: 'The Ultimate Guide To Aging Skin Ipsum Pretium Bouquet',
    createdAt: new Date('05/12/2022').getTime(),
    createdBy: 'Admin',
    content: `
    <div class="entry-content single-content">
    <p>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don’t look even slightly believable. If you are going
      to use a passage of Lorem Ipsum.Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
    </p>
    `,
  });

  similarPosts$ = of([
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

  constructor() {}

  ngOnInit(): void {}
}
