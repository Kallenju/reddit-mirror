import RTK, { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import MirrorRedditUser from '../../../interfaces/MirrorRedditUser';
import ReduxFetchUserThunkArg from '../../../interfaces/ReduxFetchUserThunkArg';
import ReduxMirrorRedditUser from '../../../interfaces/ReduxMirrorRedditUser';
import RedditUser from '../../../interfaces/RedditUser';

type returnType = MirrorRedditUser | never;

const fetchUser: RTK.AsyncThunk<
  returnType,
  ReduxFetchUserThunkArg,
  { state: RootState; dispatch: AppDispatch }
> = createAsyncThunk<
  returnType,
  ReduxFetchUserThunkArg,
  { state: RootState; dispatch: AppDispatch }
>(
  'user/fetchUser',
  async (
    { abortController }: ReduxFetchUserThunkArg,
    { getState }
  ): Promise<returnType> => {
    const { token }: { token: string } = getState();
    const { user }: { user: ReduxMirrorRedditUser } = getState();

    if (!token) {
      return user.data;
    }

    const url: URL = new URL('https://oauth.reddit.com/api/v1/me');

    const response: Response = await fetch(url, {
      headers: {
        Authorization: `bearer ${token}`,
      },
      signal: abortController ? abortController.signal : undefined,
    });

    if (!response.ok) {
      throw new TypeError(response.statusText);
    }

    const userData: RedditUser = await response.json();

    return {
      name: userData.name,
      icon_img: userData.icon_img,
    };
  }
);

export { fetchUser };
