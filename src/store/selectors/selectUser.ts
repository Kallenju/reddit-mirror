import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ReduxMirrorRedditUser from '../../interfaces/ReduxMirrorRedditUser';

const selectSelf = (state: RootState): RootState => state;

const selectUser: (state: RootState) => ReduxMirrorRedditUser =
  createDraftSafeSelector(
    selectSelf,
    (state: RootState): ReduxMirrorRedditUser => {
      return state.user;
    }
  );

export default selectUser;
