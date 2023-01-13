import React from 'react';
import styles from './controlbar.module.styl';
import PostLongreadControls from '../../../PostLongreadControls';

interface ControlBarProps {
  id: string;
  karma?: number;
  comments?: number;
}

export function ControlBar({
  id,
  karma,
  comments,
}: ControlBarProps): React.ReactElement {
  return (
    <div className={styles['control-bar']}>
      <PostLongreadControls As="Karma" view="post-control-bar" count={karma} />
      <PostLongreadControls
        id={id}
        As="Comments"
        view="post-control-bar"
        count={comments}
      />
      <div className={styles['control-bar__wrapper']}>
        <PostLongreadControls As="Share" view="post-control-bar" />
        <PostLongreadControls As="Save" view="post-control-bar" />
      </div>
    </div>
  );
}
