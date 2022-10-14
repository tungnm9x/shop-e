import { createAction, props } from '@ngrx/store';
import { Blog } from './blog.reducer';

export const loadBlogs = createAction('[Blog Page] Load Blogs');

export const loadBlogsSuccess = createAction(
  '[Blog Page] Load Blogs Success',
  props<{ items: Blog[] }>()
);

export const loadBlogsFailure = createAction(
  '[Blog Page] Load Blogs Failure',
  props<{ error: string }>()
);
