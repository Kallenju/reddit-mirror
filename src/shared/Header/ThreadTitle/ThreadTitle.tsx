import React from 'react';
import styles from './threadtitle.module.styl';

export function ThreadTitle(): React.ReactElement {
  return <h1 className={styles['thread-title']}>Discussion</h1>;
}
