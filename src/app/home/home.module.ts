import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogSharedModule } from 'app/blog/shared/blog-shared.module';
import { ProuductSharedModule } from 'app/product/shared/prouduct-shared.module';
import { ServiceSharedModule } from 'app/service/shared/service-shared.module';

import { CarouselModule } from '../shared/carousel/carousel.module';
import { ModalModule } from '../shared/modal/modal.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHighlightComponent } from './home-highlight/home-highlight.component';
import { HomeVideoHighlightComponent } from './home-video-highlight/home-video-highlight.component';
import { HomeSalientFeaturesComponent } from './home-salient-features/home-salient-features.component';
import { HomeNewProductsComponent } from './home-new-products/home-new-products.component';

@NgModule({
  declarations: [HomeComponent, HomeHighlightComponent, HomeVideoHighlightComponent, HomeSalientFeaturesComponent, HomeNewProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    ModalModule,
    ProuductSharedModule,
    BlogSharedModule,
    ServiceSharedModule,
  ],
})
export class HomeModule {}
