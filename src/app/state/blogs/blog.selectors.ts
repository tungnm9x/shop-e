import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectBlogsFeature = (state: AppState) => state.blogs;
export const selectAllBlogs = createSelector(
  selectBlogsFeature,
  (state) => state?.blogs
);
export const selectStatusBlogs = createSelector(
  selectBlogsFeature,
  (state) => state?.status
);
export const selectErrorBlogs = createSelector(
  selectBlogsFeature,
  (state) => state?.error
);
