import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [CommonModule],
  exports: [ProductItemComponent],
})
export class ProuductSharedModule {}
