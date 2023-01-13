import { useEffect, useCallback } from 'react';
import RTK from '@reduxjs/toolkit';
import * as ReduxThunk from 'redux-thunk';
import { RootState } from '../store';
import ReduxFetchPostsThunkArg from '../interfaces/ReduxFetchPostsThunkArg';
import { useDispatch, useSelector } from 'react-redux';
import selectToken from '../store/selectors/selectToken';
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
  const token: string = useSelector<RootState, string>(selectToken);
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

  useEffect((): (() => void) | void => {
    if (token) {
      const abortController: AbortController = new AbortController();
      fetchPostsCallback({
        abortController,
      });

      return (): void => {
        abortController.abort();
      };
    }
  }, [api, dispatch, fetchPostsCallback, postsLimit, token]);

  return fetchPostsCallback;
}
