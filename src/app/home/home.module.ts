import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from '../shared/carousel/carousel.module';
import { ModalModule } from '../shared/modal/modal.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule, ModalModule],
})
export class HomeModule {}
