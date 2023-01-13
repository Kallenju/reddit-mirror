import CommentForms from './CommentForms';
import ReduxMirrorRedditUser from './ReduxMirrorRedditUser';
import ReduxMirrorRedditPostsData from './ReduxMirrorRedditPostsData';

interface ReduxRootState {
  token: string;
  user: ReduxMirrorRedditUser;
  posts: ReduxMirrorRedditPostsData;
  commentForms: CommentForms;
}

export { type ReduxRootState as default };
