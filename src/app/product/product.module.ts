import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'app/shared/pagination/pagination.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxSliderModule,
    FormsModule,
    PaginationModule,
  ],
})
export class ProductModule {}
