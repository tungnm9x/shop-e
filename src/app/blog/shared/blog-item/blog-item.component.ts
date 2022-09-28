import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nmt-blog-item',
  templateUrl: './blog-item.component.html',
})
export class BlogItemComponent implements OnInit {
  @Input() item!: {
    id: number | string;
    imageUrl: string;
    name: string;
    createdAt: number;
    createdBy: string;
  };

  @Input() customClass = '';

  constructor() {}

  ngOnInit(): void {}
}
