import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SlideOverModule } from 'app/shared/slide-over/slide-over.module';
import { BlogComponent } from './blog.component';
import { BlogSharedModule } from './shared/blog-shared.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        loadChildren: () =>
          import('./blog-detail/blog-detail.module').then(
            (m) => m.BlogDetailModule
          ),
      },
      {
        path: '',
        component: BlogComponent,
      },
    ]),
    FormsModule,
    SlideOverModule,
    BlogSharedModule,
  ],
})
export class BlogModule {}
