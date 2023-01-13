import RedditComment from '../interfaces/RedditComment';
import RedditCommentReply from '../interfaces/RedditCommentReply';
import MirrorRedditCommentReplyData from '../interfaces/MirrorRedditCommentReplyData';

export default function createMirrorRedditCommentReplyData(
  comment: RedditComment
): '' | Array<MirrorRedditCommentReplyData> {
  let replies: '' | Array<MirrorRedditCommentReplyData> = '';

  if (comment.data.replies) {
    replies = comment.data.replies.data.children.map(
      (reply: RedditCommentReply): MirrorRedditCommentReplyData => {
        return {
          id: reply.data.name,
          name: reply.data.author,
          icon: '',
          text: reply.data.body,
          created_utc: reply.data.created_utc,
          replies: createMirrorRedditCommentReplyData(reply),
        };
      }
    );
  }

  return replies;
}
