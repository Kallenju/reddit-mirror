import RedditLongreadData from './RedditLongreadData';
import SubRedditData from './SubRedditData';

type MirrorRedditLongreadData = Pick<
  RedditLongreadData,
  'id' | 'title' | 'score' | 'created_utc' | 'num_comments'
> &
  Record<'sr_detail', Pick<SubRedditData, 'icon_img' | 'url'>> & {
    paragraphs: Array<RedditLongreadData['selftext']>;
    figures: Array<RedditLongreadData['preview']>;
    figcaptions: Array<RedditLongreadData['selftext']>;
  };

export { type MirrorRedditLongreadData as default };
