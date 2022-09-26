import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'app/shared/pagination/pagination.module';
import { SlideOverModule } from 'app/shared/slide-over/slide-over.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProuductSharedModule } from './shared/prouduct-shared.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxSliderModule,
    FormsModule,
    PaginationModule,
    ProuductSharedModule,
    SlideOverModule,
  ],
})
export class ProductModule {}
