import User from './RedditUser';

type MirrorRedditUser = Pick<User, 'name' | 'icon_img'>;

export default MirrorRedditUser;
