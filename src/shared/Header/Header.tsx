import React from 'react';
import styles from './header.module.styl';
import SearchBlock from './SearchBlock';
import Sort from './Sort';
import ThreadTitle from './ThreadTitle';

export function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <ThreadTitle />
      <Sort />
      <SearchBlock />
    </header>
  );
}
