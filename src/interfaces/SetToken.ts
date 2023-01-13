import { SET_TOKEN } from '../store/features/TokenReducer/tokenConstants';

interface SetToken {
  type: typeof SET_TOKEN;
  payload: string;
}

export { type SetToken as default };
