import RTK, { createAction } from '@reduxjs/toolkit';
import { SET_TOKEN } from './tokenConstants';
import SetTokenType from '../../../interfaces/SetToken';

export const setToken: RTK.PayloadActionCreator<
  SetTokenType['payload'],
  SetTokenType['type'],
  (token: SetTokenType['payload']) => Pick<SetTokenType, 'payload'>
> = createAction(
  SET_TOKEN,
  (token: SetTokenType['payload']): Pick<SetTokenType, 'payload'> => {
    return {
      payload: token,
    };
  }
);
