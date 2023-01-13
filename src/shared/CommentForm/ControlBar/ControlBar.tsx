import React from 'react';
import styles from './controlbar.module.styl';
import PostLongreadControls from '../../PostLongreadControls';

export function ControlBar(): React.ReactElement {
  return (
    <div className={styles['control-bar']}>
      <PostLongreadControls As={'Citation'} view={'comment-form'} />
      <PostLongreadControls As={'AttachImage'} view={'comment-form'} />
      <PostLongreadControls As={'Attach'} view={'comment-form'} />
      <PostLongreadControls As={'RecordVoice'} view={'comment-form'} />
      <PostLongreadControls As={'Paint'} view={'comment-form'} />
      <PostLongreadControls As={'FormatText'} view={'comment-form'} />
    </div>
  );
}
