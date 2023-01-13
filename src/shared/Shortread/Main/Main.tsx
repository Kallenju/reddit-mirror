import React from 'react';
import styles from './main.module.styl';
import Preview from './Preview';
import MirrorRedditPostData from '../../../interfaces/MirrorRedditPostData';

interface MainProps {
  title: string;
  preview: MirrorRedditPostData['preview'];
}

export function Main({ title, preview }: MainProps): React.ReactElement {
  return (
    <div className={styles['main']}>
      <Preview title={title} preview={preview} />
    </div>
  );
}
