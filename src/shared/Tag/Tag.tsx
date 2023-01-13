import React from 'react';
import styles from './tag.module.styl';

interface TagProps {
  text: string;
  view: 'longread-header' | 'shortread-header' | 'comment-header';
}

export function Tag({ text, view }: TagProps): React.ReactElement {
  return (
    <span className={`${styles['tag']} ${styles[`tag_view_${view}`]}`}>
      {text}
    </span>
  );
}
