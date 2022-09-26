import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'nmt-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() tabs: { id: string | number; label: string }[] = [];

  @Input() tabIndex = 1;
  @Input() contentTpl!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
