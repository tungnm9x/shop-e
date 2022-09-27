import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SlideOverModule } from 'app/shared/slide-over/slide-over.module';
import { ServiceComponent } from './service.component';
import { ServiceSharedModule } from './shared/service-shared.module';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServiceComponent,
      },
    ]),
    SlideOverModule,
    ServiceSharedModule,
  ],
})
export class ServiceModule {}
