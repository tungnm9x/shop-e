import { createReducer, on } from '@ngrx/store';
import { loadBlogs, loadBlogsFailure, loadBlogsSuccess } from './blog.actions';

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
  // Init state
  initBlogState,
  // Load blogs
  on(loadBlogs, (state) => ({ ...state, status: 'loading' })),
  // Load blogs success
  on(loadBlogsSuccess, (state, { items }) => ({
    ...state,
    blogs: items,
    status: 'success',
    error: null
  })),
  // Load blog fail
  on(loadBlogsFailure, (state, { error }) => ({
    ...state,
    error,
    status: 'error',
  }))
);
