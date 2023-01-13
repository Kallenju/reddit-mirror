import React from 'react';
import styles from './header.module.styl';
import Account from '../../../Account';
import CreatedAt from '../../../CreatedAt';
import Tittle from './Title';

interface HeaderProps {
  id: string;
  userName: string;
  userIcon: string;
  date: number;
  title: string;
}

export function Header({
  id,
  userName,
  userIcon,
  date,
  title,
}: HeaderProps): React.ReactElement {
  return (
    <header className={styles['header']}>
      <div className={styles['header__metadata']}>
        <Account userName={userName} userIcon={userIcon} view={'post-header'} />
        <CreatedAt date={date} view={'post-header'} />
      </div>
      <Tittle id={id} title={title} />
    </header>
  );
}
