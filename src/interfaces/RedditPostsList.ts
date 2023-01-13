import RedditPost from './RedditPost';

interface RedditPostsList {
  kind: 'Listing';
  data: {
    after: string | null;
    dist: number;
    modhash: string | null;
    geo_filter: string | null;
    children: Array<RedditPost>;
    before: string | null;
  };
}

export { type RedditPostsList as default };
