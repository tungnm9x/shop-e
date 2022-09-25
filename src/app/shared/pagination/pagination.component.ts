import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nmt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageIndex = 1;
  @Input() total = 0;
  @Output() pageChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  gotoPage(index: number) {
    this.pageChange.emit({
      page: index + 1,
    });
  }
}
