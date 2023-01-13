import React from 'react';
import styles from './main.module.styl';
import PostsList from '../PostsList';

export function Main(): React.ReactElement {
  return (
    <main className={styles['main']}>
      <PostsList />
    </main>
  );
}
