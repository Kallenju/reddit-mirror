import RTK, { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import ReduxFetchPostsThunkArg from '../../../interfaces/ReduxFetchPostsThunkArg';
import RedditPost from '../../../interfaces/RedditPost';
import RedditPostsList from '../../../interfaces/RedditPostsList';
import MirrorRedditPostData from '../../../interfaces/MirrorRedditPostData';
import ReduxMirrorRedditPostsData from '../../../interfaces/ReduxMirrorRedditPostsData';

type returnType = Array<MirrorRedditPostData> | never;

const fetchPosts: RTK.AsyncThunk<
  returnType,
  ReduxFetchPostsThunkArg,
  { state: RootState }
> = createAsyncThunk<returnType, ReduxFetchPostsThunkArg, { state: RootState }>(
  'posts/fetchPosts',
  async (
    { subreddit, api, postsLimit, abortController }: ReduxFetchPostsThunkArg,
    { getState }
  ): Promise<returnType> => {
    const { posts }: { posts: ReduxMirrorRedditPostsData } = getState();

    if (posts.end) {
      return [];
    }

    const { token }: { token: string } = getState();

    if (!token) {
      throw new TypeError('Token is not defined');
    }

    const url: URL = new URL(
      `https://oauth.reddit.com/r/${encodeURIComponent(
        subreddit
      )}/${encodeURIComponent(api)}.json`
    );
    url.searchParams.set(
      encodeURIComponent('sr_detail'),
      encodeURIComponent('true')
    );
    if (posts.after) {
      url.searchParams.set(
        encodeURIComponent('after'),
        encodeURIComponent(posts.after)
      );
    }
    url.searchParams.set(
      encodeURIComponent('limit'),
      encodeURIComponent(`${postsLimit}`)
    );
    url.searchParams.set(
      encodeURIComponent('count'),
      encodeURIComponent(`${posts[api]?.length || 0}`)
    );

    const response: Response = await fetch(url, {
      headers: {
        Authorization: `bearer ${token}`,
      },
      signal: abortController ? abortController.signal : undefined,
    });

    if (!response.ok) {
      throw new TypeError(response.statusText);
    }

    const postsList: RedditPostsList = await response.json();

    const dataToBeSetted: Array<MirrorRedditPostData> =
      postsList.data.children.map((post: RedditPost): MirrorRedditPostData => {
        return {
          id: post.data.name,
          title: post.data.title,
          score: post.data.score,
          preview: post.data.preview,
          created_utc: post.data.created_utc,
          num_comments: post.data.num_comments,
          sr_detail: {
            icon_img: post.data.sr_detail.icon_img,
            url: post.data.sr_detail.url,
          },
        };
      });

    return dataToBeSetted.slice(
      dataToBeSetted.length - postsLimit >= 0
        ? dataToBeSetted.length - postsLimit
        : 0,
      dataToBeSetted.length
    );
  }
);

export { fetchPosts };
