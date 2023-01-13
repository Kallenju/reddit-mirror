import React from 'react';
import styles from './post.module.styl';
import MirrorRedditPostData from '../../../interfaces/MirrorRedditPostData';
import Header from './Header';
import Menu from './Menu';
import ControlBar from './ControlBar';
import PostLongreadControls from '../../PostLongreadControls';
import Preview from './Preview';

interface PostProps {
  id: string;
  userName: string;
  userIcon: string;
  date: number;
  title: string;
  preview: MirrorRedditPostData['preview'];
  karma?: number;
  comments?: number;
}

export function Post({
  id,
  userName,
  userIcon,
  date,
  title,
  preview,
  karma,
  comments,
}: PostProps): React.ReactElement {
  return (
    <article id={id} className={styles['post']}>
      <Header
        id={id}
        userName={userName}
        userIcon={userIcon}
        date={date}
        title={title}
      />
      <Preview title={title} preview={preview} />
      <Menu id={id} />
      <PostLongreadControls As="Karma" view="post-body" count={karma} />
      <ControlBar karma={karma} comments={comments} id={id} />
    </article>
  );
}
