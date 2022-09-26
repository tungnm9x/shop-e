import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nmt-slide-over',
  templateUrl: './slide-over.component.html',
  styleUrls: ['./slide-over.component.scss'],
})
export class SlideOverComponent implements OnInit {
  @Input() isVisible = false;
  @Input() title = '';
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
