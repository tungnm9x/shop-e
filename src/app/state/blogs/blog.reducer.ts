import { createReducer, on } from '@ngrx/store';
import { loadBlogs } from './blog.actions';

export interface Blog {
  id: number;
  imageUrl: string;
  title: string;
  createdAt: number;
  createdBy: string;
}

export interface BlogState {
  blogs: Blog[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initBlogState: BlogState = {
  blogs: [],
  error: null,
  status: 'pending',
};

export const blogReducer = createReducer(
  // init state
  initBlogState,
  // load blogs
  on(loadBlogs, (state, action) => ({ ...state, status: 'loading' }))
);
