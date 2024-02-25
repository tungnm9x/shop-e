import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';
import { BlogService } from '@core/services/blog.service';
import { Helper } from '@core/utils';
import { Store } from '@ngrx/store';
import { selectAllBlogs } from 'app/state/blogs/blog.selectors';
import { of } from 'rxjs';

@Component({
  selector: 'nmt-blog',
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  // allPosts$ = this.store.select(selectAllBlogs);

  archives$ = of([
    new Date('08/06/2022').getTime(),
    new Date('07/06/2022').getTime(),
    new Date('05/06/2022').getTime(),
    new Date('010/12/2021').getTime(),
  ]);
  constructor(private store: Store) {}

  ngOnInit(): void {
    Helper.scrollToTop();
  }
}
