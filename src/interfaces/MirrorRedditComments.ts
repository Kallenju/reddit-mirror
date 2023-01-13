import MirrorRedditPostData from './MirrorRedditPostData';
import MirrorRedditCommentData from './MirrorRedditCommentData';

interface MirrorRedditComments {
  post: MirrorRedditPostData;
  comments: Array<MirrorRedditCommentData>;
}

export { type MirrorRedditComments as default };
