import React from 'react';
import styles from './controlbar.module.styl';
import PostLongreadControls from '../../../PostLongreadControls';

interface ControlBarProps {
  numComments?: number;
}

export function ControlBar({
  numComments,
}: ControlBarProps): React.ReactElement {
  return (
    <div className={styles['control-bar']}>
      <PostLongreadControls
        As="Comments"
        view="longread-control-bar"
        count={numComments}
      />
      <PostLongreadControls As="Share" view="longread-control-bar" />
      <PostLongreadControls As="Hide" view="longread-control-bar" />
      <PostLongreadControls As="Save" view="longread-control-bar" />
      <PostLongreadControls As="Report" view="longread-control-bar" />
    </div>
  );
}
