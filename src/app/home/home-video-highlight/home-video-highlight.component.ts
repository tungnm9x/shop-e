import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nmt-home-video-highlight',
  templateUrl: './home-video-highlight.component.html',
  styleUrls: ['./home-video-highlight.component.scss'],
})
export class HomeVideoHighlightComponent implements OnInit {
  showVideo: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
