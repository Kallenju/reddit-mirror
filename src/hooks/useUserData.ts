import { useEffect } from 'react';
import RTK from '@reduxjs/toolkit';
import * as ReduxThunk from 'redux-thunk';
import { RootState } from '../store';
import ReduxFetchUserThunkArg from '../interfaces/ReduxFetchUserThunkArg';
import { useDispatch, useSelector } from 'react-redux';
import selectToken from '../store/selectors/selectToken';
import { fetchUser } from '../store/features/UserReducer/userThunk';

type UserDispatch = ReduxThunk.ThunkDispatch<
  RootState,
  ReduxFetchUserThunkArg,
  RTK.Action<string>
>;

export default function useUserData(): void {
  const token: string = useSelector<RootState, string>(selectToken);
  const dispatch: UserDispatch = useDispatch<UserDispatch>();

  useEffect((): (() => void) | void => {
    if (token) {
      const abortController: AbortController = new AbortController();
      dispatch(fetchUser({ abortController }));

      return (): void => {
        abortController.abort();
      };
    }
  }, [dispatch, token]);
}
