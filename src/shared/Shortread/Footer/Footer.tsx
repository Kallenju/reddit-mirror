import React from 'react';
import styles from './footer.module.styl';
import MirrorRedditComments from '../../../interfaces/MirrorRedditComments';
import ControlBar from './ControlBar';
import CommentFormContainer from '../../CommentFormContainer';
import Comments from '../../Comments';

interface FooterProps {
  id: string;
  numComments?: number;
  comments: MirrorRedditComments['comments'];
}

export function Footer({
  id,
  numComments,
  comments,
}: FooterProps): React.ReactElement {
  return (
    <div className={styles['footer']}>
      <ControlBar numComments={numComments} />
      <CommentFormContainer id={id} />
      <Comments comments={comments} />
    </div>
  );
}
