import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabModule } from 'app/shared/tab/tab.module';
import { ProuductSharedModule } from '../shared/prouduct-shared.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailComponent,
      },
    ]),
    TabModule,
    ProuductSharedModule,
  ],
})
export class ProductDetailModule {}
