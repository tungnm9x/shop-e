import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from 'app/shared/pagination/pagination.module';
import { SlideOverModule } from 'app/shared/slide-over/slide-over.module';
import { ProductComponent } from './product.component';
import { ProuductSharedModule } from './shared/prouduct-shared.module';

const routes: Routes = [
  {
    path: ':id',
    loadChildren: () =>
      import('./product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
  {
    path: '',
    component: ProductComponent,
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    NgxSliderModule,
    FormsModule,
    PaginationModule,
    ProuductSharedModule,
    SlideOverModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductModule {}
