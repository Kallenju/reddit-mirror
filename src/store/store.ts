import RTK, { configureStore } from '@reduxjs/toolkit';
import ReduxRootState from '../interfaces/ReduxRootState';
import tokenReducer from './features/TokenReducer/tokenReducer';
import userReducer from './features/UserReducer/userReducer';
import postsReducer from './features/PostsReducer/postsReducer';
import commentFormsReducer from './features/CommentFormsReducer/commentFormsReducer';

const store: RTK.EnhancedStore<ReduxRootState> = configureStore<ReduxRootState>(
  {
    reducer: {
      token: tokenReducer,
      user: userReducer,
      posts: postsReducer,
      commentForms: commentFormsReducer,
    },
    preloadedState:
      typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined,
  }
);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
