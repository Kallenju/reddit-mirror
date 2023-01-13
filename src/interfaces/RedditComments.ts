import RedditPost from './RedditPost';
import RedditComment from './RedditComment';

type RedditComments = [
  {
    kind: 'Listing';
    data: {
      after: string;
      dist: number;
      modhash: string;
      geo_filter: string;
      children: [RedditPost];
      before: string;
    };
  },
  {
    kind: 'Listing';
    data: {
      after: string;
      dist: string;
      modhash: string;
      geo_filter: string;
      children: Array<RedditComment>;
      before: string;
    };
  }
];

export { type RedditComments as default };
