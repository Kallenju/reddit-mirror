import RTK, { createReducer } from '@reduxjs/toolkit';
import ReduxMirrorRedditPostsData from '../../../interfaces/ReduxMirrorRedditPostsData';
import { fetchPosts } from './postsThunk';

const postsReducer: RTK.Reducer<ReduxMirrorRedditPostsData> =
  createReducer<ReduxMirrorRedditPostsData>(
    {
      state: 'idle',
      error: null,
    },
    (
      builder: RTK.ActionReducerMapBuilder<ReduxMirrorRedditPostsData>
    ): void => {
      builder
        .addCase(
          fetchPosts.pending,
          (state: RTK.Draft<ReduxMirrorRedditPostsData>, action): void => {
            if (state.state === 'idle' && !state.end) {
              state.state = 'pending';
            }
          }
        )
        .addCase(
          fetchPosts.fulfilled,
          (state: RTK.Draft<ReduxMirrorRedditPostsData>, action): void => {
            if (state.state === 'pending' && !state.end) {
              state.state = 'idle';
              state.error = null;

              const postsKey: keyof ReduxMirrorRedditPostsData =
                action.meta.arg.api;

              state[postsKey] = Array.isArray(state[postsKey])
                ? state[postsKey]?.concat(action.payload)
                : action.payload;

              if (action.payload.length > 0) {
                state.after = action.payload[action.payload.length - 1].id;
              } else {
                delete state.after;
              }

              if (action.payload.length === 0) {
                state.end = true;
              }
            }
          }
        )
        .addCase(
          fetchPosts.rejected,
          (state: RTK.Draft<ReduxMirrorRedditPostsData>, action): void => {
            if (state.state === 'pending' && !state.end) {
              if (action.error.name !== 'AbortError') {
                state.state = 'idle';
                state.error = action.error.message || 'Unknown error';
              }
            }
          }
        );
    }
  );

export default postsReducer;
