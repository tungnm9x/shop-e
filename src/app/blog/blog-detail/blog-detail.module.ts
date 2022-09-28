import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { BlogSharedModule } from '../shared/blog-shared.module';
import { BlogDetailComponent } from './blog-detail.component';

@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogDetailComponent,
      },
    ]),
    BlogSharedModule,
  ],
})
export class BlogDetailModule {}
