import { createAction, props } from '@ngrx/store';

export const loadBlogs = createAction('[Blog Page] Load Blogs');

export const loadBlogsSuccess = createAction(
  '[Blog Page] Load Blogs Success',
  props<any>()
);

export const loadBlogsError = createAction(
  '[Blog Page] Load Blogs Error',
  props<any>()
);
