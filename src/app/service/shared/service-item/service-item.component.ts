import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nmt-service-item',
  templateUrl: './service-item.component.html',
})
export class ServiceItemComponent implements OnInit {
  @Input() item!: {
    id: number | string;
    name: string;
    imageUrl: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
