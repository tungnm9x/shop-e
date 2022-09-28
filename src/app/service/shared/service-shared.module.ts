import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceItemComponent } from './service-item/service-item.component';

@NgModule({
  declarations: [ServiceItemComponent],
  imports: [CommonModule],
  exports: [ServiceItemComponent],
})
export class ServiceSharedModule {}
