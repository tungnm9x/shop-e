import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { CoreModule } from '../core/core.module';
import { ModalModule } from '../shared/modal/modal.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    CoreModule,
    ModalModule,
  ],
})
export class HomeModule {}
