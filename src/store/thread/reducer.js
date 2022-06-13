import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import {
  loadPosts,
  toggleExpandedPost,
  likePost,
  addComment,
  applyPost,
  createPost
} from './actions';

const initialState = {
  posts: [],
  expandedPost: null
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(loadPosts.fulfilled, (state, action) => {
    const { posts } = action.payload;

    state.posts = posts;
  });
  builder.addCase(toggleExpandedPost.fulfilled, (state, action) => {
    const { post } = action.payload;

    state.expandedPost = post;
  });
  builder.addMatcher(
    isAnyOf(likePost.fulfilled, addComment.fulfilled),
    (state, action) => {
      const { posts, expandedPost } = action.payload;
      state.posts = posts;
      state.expandedPost = expandedPost;
    }
  );
  builder.addMatcher(
    isAnyOf(applyPost.fulfilled, createPost.fulfilled),
    (state, action) => {
      const { post } = action.payload;

      state.posts = [post, ...state.posts];
    }
  );
});

export { reducer };
