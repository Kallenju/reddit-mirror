interface ReduxFetchPostsThunkArg {
  subreddit: string;
  api: 'best' | 'hot' | 'new' | 'top' | 'rising';
  postsLimit: number;
  abortController?: AbortController;
}

export { type ReduxFetchPostsThunkArg as default };
