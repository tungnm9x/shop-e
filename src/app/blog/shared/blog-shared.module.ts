import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogItemComponent } from './blog-item/blog-item.component';

@NgModule({
  declarations: [BlogItemComponent],
  imports: [CommonModule],
  exports: [BlogItemComponent],
})
export class BlogSharedModule {}
