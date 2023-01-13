import MirrorRedditPostData from './MirrorRedditPostData';

interface ReduxMirrorRedditPostsData {
  state: 'idle' | 'pending';
  error: string | null;
  best?: Array<MirrorRedditPostData>;
  hot?: Array<MirrorRedditPostData>;
  new?: Array<MirrorRedditPostData>;
  top?: Array<MirrorRedditPostData>;
  rising?: Array<MirrorRedditPostData>;
  after?: string;
  end?: boolean;
}

export default ReduxMirrorRedditPostsData;
