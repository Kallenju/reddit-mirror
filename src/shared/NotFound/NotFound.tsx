import React from 'react';
import styles from './notfound.module.styl';

export function NotFound(): React.ReactElement {
  return (
    <div className={styles['not-found']}>
      <h1 className={styles[`not-found__title`]}>404 — страница не найдена</h1>
    </div>
  );
}
