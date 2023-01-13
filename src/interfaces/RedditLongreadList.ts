import RedditLongread from './RedditLongread';

interface RedditLongreadList {
  kind: 'Listing';
  data: {
    after: string | null;
    dist: number;
    modhash: string | null;
    geo_filter: string | null;
    children: [RedditLongread];
    before: string | null;
  };
}

export { type RedditLongreadList as default };
