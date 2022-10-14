import { Injectable } from '@angular/core';
import { HttpService } from '@core/common/http.service';
import { API } from '@core/const';
import { Blog } from 'app/state/blogs/blog.reducer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs$ = this.getList();

  constructor(private http: HttpService) {}

  getList(): Observable<Blog[]> {
    return this.http.sendToServer('GET', API.BLOG.LIST);
  }
}
