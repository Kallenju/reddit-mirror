import { useCallback } from 'react';
import RTK from '@reduxjs/toolkit';
import * as ReduxThunk from 'redux-thunk';
import { RootState } from '../store';
import ReduxFetchPostsThunkArg from '../interfaces/ReduxFetchPostsThunkArg';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../store/features/PostsReducer/postsThunk';

type UserDispatch = ReduxThunk.ThunkDispatch<
  RootState,
  ReduxFetchPostsThunkArg,
  RTK.Action<string>
>;

export default function usePostsData({
  subreddit,
  api,
  postsLimit,
}: ReduxFetchPostsThunkArg): ({
  abortController,
}: {
  abortController: AbortController;
}) => void {
  const dispatch: UserDispatch = useDispatch<UserDispatch>();

  const fetchPostsCallback: ({
    abortController,
  }: {
    abortController: AbortController;
  }) => void = useCallback(
    ({ abortController }: { abortController: AbortController }): void => {
      dispatch(fetchPosts({ subreddit, api, postsLimit, abortController }));
    },
    [api, dispatch, postsLimit, subreddit]
  );

  return fetchPostsCallback;
}
