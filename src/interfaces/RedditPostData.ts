import SubRedditData from './SubRedditData';

interface RedditPostData {
  approved_at_utc: string | null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: string | null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: Array<string>;
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string | null;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: string | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: string | null;
  ups: number;
  total_awards_received: number;
  media_embed: {
    [key: string]: string;
  };
  thumbnail_width: number;
  author_flair_template_id: string | null;
  is_original_content: boolean;
  user_reports: Array<string>;
  secure_media: {
    reddit_video: {
      bitrate_kbps: number;
      fallback_url: string;
      height: number;
      width: number;
      scrubber_media_url: string;
      dash_url: string;
      duration: number;
      hls_url: string;
      is_gif: boolean;
      transcoding_status: 'completed';
    };
  };
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: string | null;
  secure_media_embed: {
    [key: string]: string;
  };
  link_flair_text: string | null;
  can_mod_post: boolean;
  score: number;
  approved_by: string | null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: string | null;
  author_flair_richtext: Array<string>;
  gildings: {
    [key: string]: string;
  };
  post_hint: string;
  content_categories: string | null;
  is_self: boolean;
  subreddit_type: string;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: string | null;
  banned_by: string | null;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string | null;
  likes: string | null;
  suggested_sort: string;
  banned_at_utc: string | null;
  url_overridden_by_dest: string;
  view_count: string | null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: {
    images: [
      {
        source: {
          url: string;
          width: number;
          height: number;
        };
        resolutions: Array<{
          url: string;
          width: number;
          height: number;
        }>;
        variants: {
          [key: string]: string;
        };
        id: string;
      }
    ];
    enabled: boolean;
  } | null;
  all_awardings: Array<string>;
  awarders: Array<string>;
  media_only: boolean;
  sr_detail: SubRedditData;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string | null;
  treatment_tags: Array<string>;
  visited: boolean;
  removed_by: string | null;
  mod_note: string | null;
  distinguished: string | null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: string | null;
  num_reports: string | null;
  removal_reason: string | null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: string | null;
  author: string;
  discussion_type: string | null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: Array<string>;
  author_patreon_flair: boolean;
  author_flair_text_color: string | null;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: {
    reddit_video: {
      bitrate_kbps: number;
      fallback_url: string;
      height: number;
      width: number;
      scrubber_media_url: string;
      dash_url: string;
      duration: number;
      hls_url: string;
      is_gif: boolean;
      transcoding_status: 'completed';
    };
  };
  is_video: boolean;
}

export { type RedditPostData as default };
