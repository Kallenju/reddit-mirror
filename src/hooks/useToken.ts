import { useEffect } from 'react';
import RTK from '@reduxjs/toolkit';
import * as ReduxThunk from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from '../store/features/TokenReducer/tokenConstants';
import { saveToken } from '../store/features/TokenReducer/tokenThunk';

type TokenAppDispatch = ReduxThunk.ThunkDispatch<
  string,
  unknown,
  RTK.Action<typeof SET_TOKEN>
>;

export default function useToken(): void {
  const dispatch: TokenAppDispatch = useDispatch<TokenAppDispatch>();

  useEffect((): void => {
    dispatch(saveToken());
  }, [dispatch]);
}
