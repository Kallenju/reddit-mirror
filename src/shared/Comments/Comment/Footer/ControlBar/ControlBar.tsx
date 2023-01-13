import React from 'react';
import styles from './controlbar.module.styl';
import PostLongreadControls from '../../../../PostLongreadControls';
import noop from '../../../../../utils/noop';

interface ControlBarProps {
  onClickComments?: (event: React.MouseEvent | MouseEvent) => void;
}

export function ControlBar({
  onClickComments = noop,
}: ControlBarProps): React.ReactElement {
  return (
    <div className={styles['control-bar']}>
      <PostLongreadControls
        As="Comments"
        view="comment-control-bar"
        onClick={onClickComments}
      />
      <PostLongreadControls As="Share" view="comment-control-bar" />
      <PostLongreadControls As="Report" view="comment-control-bar" />
    </div>
  );
}
