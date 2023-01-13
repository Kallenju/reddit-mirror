import React from 'react';
import styles from './footer.module.styl';
import useComments from '../../../hooks/useComments';
import MirrorRedditComments from '../../../interfaces/MirrorRedditComments';
import ControlBar from './ControlBar';
import Comments from '../../Comments';
import CommentFormContainer from '../../CommentFormContainer';

interface FooterProps {
  id: string;
  numComments?: number;
}

export function Footer({ id, numComments }: FooterProps): React.ReactElement {
  const [comments]: [MirrorRedditComments] = useComments(id);

  return (
    <div className={styles['footer']}>
      <ControlBar numComments={numComments} />
      <CommentFormContainer id={id} />
      <Comments comments={comments.comments} />
    </div>
  );
}
