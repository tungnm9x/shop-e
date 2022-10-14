import { Injectable } from '@angular/core';
import { HttpService } from '@core/common/http.service';
import { API } from '@core/const';

@Injectable({
  providedIn: 'root',
})
export class BlogService { 
  blogs$ = this.getList();

  constructor(private http: HttpService) {}

  getList() {
    return this.http.sendToServer('GET', API.BLOG.LIST);
  }
}
