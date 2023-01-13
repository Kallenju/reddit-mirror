import RedditPostData from './RedditPostData';
import SubRedditData from './SubRedditData';

type MirrorRedditPostData = Pick<
  RedditPostData,
  'id' | 'title' | 'score' | 'preview' | 'created_utc' | 'num_comments'
> &
  Record<'sr_detail', Pick<SubRedditData, 'icon_img' | 'url'>>;

export { type MirrorRedditPostData as default };
