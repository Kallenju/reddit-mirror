import RTK, { createReducer } from '@reduxjs/toolkit';
import { SET_TOKEN } from './tokenConstants';
import SetTokenType from '../../../interfaces/SetToken';

const tokenReducer: RTK.Reducer<string> = createReducer<string>(
  '',
  (builder: RTK.ActionReducerMapBuilder<string>): void => {
    builder.addCase(
      SET_TOKEN,
      (state: RTK.Draft<string>, action: SetTokenType): string => {
        return action.payload;
      }
    );
  }
);

export default tokenReducer;
