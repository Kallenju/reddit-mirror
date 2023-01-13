import RTK from '@reduxjs/toolkit';
import * as ReduxThunk from 'redux-thunk';
import { SET_TOKEN } from './tokenConstants';
import { setToken } from './tokenActions';

const saveToken =
  (): ReduxThunk.ThunkAction<
    void,
    string,
    unknown,
    RTK.Action<typeof SET_TOKEN>
  > =>
  (
    dispatch: ReduxThunk.ThunkDispatch<
      string,
      unknown,
      RTK.Action<typeof SET_TOKEN>
    >
  ): void => {
    const tokenCookieName: string = encodeURIComponent('access_token');
    const currentToken: string =
      document.cookie
        .match(`(^|;)\\s*${tokenCookieName}\\s*=\\s*([^;]+)`)
        ?.pop() || '';

    dispatch(setToken(currentToken));
  };

export { saveToken };
