import { Component } from '@angular/core';
import { Helper } from '@core/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Helper = Helper;
  title = 'shop-e';
}
