import React from 'react';
import styles from './createdat.module.styl';
import getFormattedDate from '../../utils/getFormattedDate';

interface CreatedAtProps {
  date?: number;
  prefix?: boolean;
  view:
    | 'longread-header'
    | 'shortread-header'
    | 'post-header'
    | 'comment-header';
}

export function CreatedAt({
  date,
  prefix,
  view,
}: CreatedAtProps): React.ReactElement {
  return (
    <span
      className={`${styles['created-at']} ${styles[`created-at_view_${view}`]}`}
    >
      {(prefix || prefix === undefined) && (
        <span className={styles['created-at__prefix']}>Опубликовано </span>
      )}
      {date ? (
        <>
          <time className={styles['created-at__time']}>
            {getFormattedDate(date, Date.now())}
          </time>
          {Math.floor((Date.now() - date) / (60 * 60 * 1000)) < 24 && (
            <span className={styles['created-at__postfix']}> назад</span>
          )}
        </>
      ) : (
        'Только что'
      )}
    </span>
  );
}
