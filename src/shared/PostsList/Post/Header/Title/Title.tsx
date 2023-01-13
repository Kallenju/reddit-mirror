import React from 'react';
import styles from './title.module.styl';
import { Link } from 'react-router-dom';

interface HeaderProps {
  id: string;
  title: string;
}

export function Title({ id, title }: HeaderProps): React.ReactElement {
  return (
    <h2 className={styles['title']}>
      <Link className={styles['title__link']} to={`${id}`}>
        {title}
      </Link>
    </h2>
  );
}
