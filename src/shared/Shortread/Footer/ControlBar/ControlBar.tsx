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
        view="shortread-control-bar"
        count={numComments}
      />
      <PostLongreadControls As="Share" view="shortread-control-bar" />
      <PostLongreadControls As="Hide" view="shortread-control-bar" />
      <PostLongreadControls As="Save" view="shortread-control-bar" />
      <PostLongreadControls As="Report" view="shortread-control-bar" />
    </div>
  );
}
