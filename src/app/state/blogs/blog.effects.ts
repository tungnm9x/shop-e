import { Injectable } from '@angular/core';
import { BlogService } from '@core/services/blog.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadBlogs, loadBlogsFailure, loadBlogsSuccess } from './blog.actions';
import { Blog } from './blog.reducer';

@Injectable()
export class BlogEffects {
  // loadBlog$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Movies Page] Load Movies'),
  //   mergeMap(() => this.moviesService.getAll()
  //     .pipe(
  //       map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );
  loadBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBlogs),
      switchMap((_) =>
        this.blogService.getList().pipe(
          map((items: Blog[]) => loadBlogsSuccess({ items: items })),
          catchError((_) => of(loadBlogsFailure({ error: "Can't load blogs" })))
          // catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private blogService: BlogService) {}
}
