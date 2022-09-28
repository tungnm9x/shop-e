import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { RANGE_PRICE, ROUTES_CONST, SORT_PRODUCT } from '@core/const';
import { ProductService } from '@core/services/product.service';
import { Helper } from '@core/utils';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'nmt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;
  options: Options = {
    floor: RANGE_PRICE[0],
    ceil: RANGE_PRICE[1],
    step: 500000,
  };
  showFilter = false;
  sorts = SORT_PRODUCT;
  pageIndex = 1;
  total = 5;
  filter = {
    categoryId: 0,
    minValue: 0,
    maxValue: 3000000,
    sort: 1,
  };
  filter$ = new BehaviorSubject(this.filter);
  categories$ = this.productService.getCategories();
  newProducts$ = this.filter$.pipe(
    switchMap((q) => this.productService.getList({ ...q })),
    tap((_) => console.log('New list'))
  );

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    Helper.scrollToTop();
  }

  chooseCategory(c: any) {
    this.filter.categoryId = c.id;
    this.reload();
  }

  reload() {
    this.filter$.next({ ...this.filter });
  }
}
