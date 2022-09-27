import { Component } from '@angular/core';
import { Helper } from '@core/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  Helper = Helper;
  title = 'shop-e';
}
