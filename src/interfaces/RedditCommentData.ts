import RedditCommentReply from './RedditCommentReply';

interface RedditCommentData {
  subreddit_id: string;
  approved_at_utc: string;
  author_is_blocked: boolean;
  comment_type: string;
  awarders: Array<string>;
  mod_reason_by: string;
  banned_by: string;
  author_flair_type: string;
  total_awards_received: number;
  subreddit: string;
  author_flair_template_id: string;
  likes: string;
  replies:
    | ''
    | {
        kind: 'Listing';
        data: {
          after: string;
          dist: string;
          modhash: string;
          geo_filter: string;
          children: Array<RedditCommentReply>;
          before: string;
        };
      };
  user_reports: Array<string>;
  saved: boolean;
  id: string;
  banned_at_utc: string;
  mod_reason_title: string;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: string;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  created_utc: number;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  approved_by: string;
  mod_note: string;
  all_awardings: Array<string>;
  collapsed: boolean;
  body: string;
  edited: boolean;
  top_awarded_type: string;
  author_flair_css_class: string;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: Array<string>;
  author_patreon_flair: boolean;
  body_html: string;
  removal_reason: string;
  collapsed_reason: string;
  distinguished: string;
  associated_award: string;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  gildings: object;
  unrepliable_reason: string;
  author_flair_text_color: string;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: string;
  locked: boolean;
  report_reasons: string;
  created: number;
  author_flair_text: string;
  treatment_tags: Array<string>;
  link_id: string;
  subreddit_name_prefixed: string;
  controversiality: number;
  depth: number;
  author_flair_background_color: string;
  collapsed_because_crowd_control: string;
  mod_reports: Array<string>;
  num_reports: string;
  ups: number;
}

export { type RedditCommentData as default };
