interface MirrorRedditCommentReplyData {
  id: string;
  name: string;
  icon: string;
  text: string;
  created_utc: number;
  replies: '' | Array<MirrorRedditCommentReplyData>;
}

export { type MirrorRedditCommentReplyData as default };
