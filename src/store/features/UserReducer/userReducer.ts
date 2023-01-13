import RTK, { createReducer } from '@reduxjs/toolkit';
import ReduxMirrorRedditUser from '../../../interfaces/ReduxMirrorRedditUser';
import { fetchUser } from './userThunk';

const userReducer: RTK.Reducer<ReduxMirrorRedditUser> =
  createReducer<ReduxMirrorRedditUser>(
    {
      state: 'idle',
      error: null,
      data: { name: '', icon_img: '' },
    },
    (builder: RTK.ActionReducerMapBuilder<ReduxMirrorRedditUser>): void => {
      builder
        .addCase(
          fetchUser.pending,
          (state: RTK.Draft<ReduxMirrorRedditUser>, action): void => {
            state.state = 'pending';
          }
        )
        .addCase(
          fetchUser.fulfilled,
          (state: RTK.Draft<ReduxMirrorRedditUser>, action): void => {
            state.state = 'succeeded';
            state.error = null;
            state.data = action.payload;
          }
        )
        .addCase(
          fetchUser.rejected,
          (state: RTK.Draft<ReduxMirrorRedditUser>, action): void => {
            state.state = 'failed';
            state.error = action.error.message || 'Unknown error';
          }
        );
    }
  );

export default userReducer;
