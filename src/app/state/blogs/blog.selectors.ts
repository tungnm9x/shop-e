import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectBlogs = (state: AppState) => state.blogs;
export const selectAllBlogs = createSelector(
  selectBlogs,
  (state) => state.blogs
);
export const selectStatusBlogs = createSelector(
  selectBlogs,
  (state) => state.status
);
export const selectErrorBlogs = createSelector(
  selectBlogs,
  (state) => state.error
);
