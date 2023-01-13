import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectSelf = (state: RootState): RootState => state;

const selectToken: (state: RootState) => string = createDraftSafeSelector(
  selectSelf,
  (state: RootState): string => {
    return state.token;
  }
);

export default selectToken;
