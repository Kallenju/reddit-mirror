import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ReduxMirrorRedditPostsData from '../../interfaces/ReduxMirrorRedditPostsData';

const selectSelf = (state: RootState): RootState => state;

const selectPosts: (state: RootState) => ReduxMirrorRedditPostsData =
  createDraftSafeSelector(
    selectSelf,
    (state: RootState): ReduxMirrorRedditPostsData => {
      return state.posts;
    }
  );

export default selectPosts;
