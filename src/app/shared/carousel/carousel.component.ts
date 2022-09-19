import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nmt-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items!: { url: string }[];

  constructor() {}

  ngOnInit(): void {}
}
